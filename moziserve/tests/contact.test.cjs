const { test } = require('node:test');
const assert = require('node:assert/strict');
const { buildDraft } = require('../assets/contact.js');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

function openPage(values) {
  const status = { textContent: '' };
  const form = new EventTarget();
  form.hidden = true;
  form.elements = Object.fromEntries(['name', 'message'].map(key => [key, { focus() { this.focused = true; } }]));
  const window = { location: { href: '' } };
  const document = {
    querySelector: selector => selector === '#draft-status' ? status : form
  };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/contact.js'), 'utf8'), {
    document, window, URLSearchParams, FormData: class { constructor() { return Object.entries(values); } }
  });
  return { status, form, window, submit() { const event = new Event('submit', { cancelable: true }); form.dispatchEvent(event); return event; } };
}

test('approved composer initializes and requests an admin draft without claiming delivery', () => {
  const page = openPage({ name: 'Visitor', topic: 'General query', location: '', message: 'Please explain the project process.' });
  assert.equal(page.form.hidden, false);
  assert.equal(page.submit().defaultPrevented, true);
  assert.equal(new URL(page.window.location.href).pathname, 'enquiries@moziserve.co.za');
  assert.match(page.status.textContent, /press Send/);
  assert.doesNotMatch(page.status.textContent, /success|sent|delivered/i);
});

test('blank names and messages never open an email draft', () => {
  for (const values of [{ name: ' ', message: 'Query' }, { name: 'Visitor', message: ' ' }]) {
    const page = openPage(values);
    page.submit();
    assert.equal(page.window.location.href, '');
    assert.match(page.status.textContent, /Please enter/);
    assert.equal(page.form.elements[values.name.trim() ? 'message' : 'name'].focused, true);
  }
});

test('enquiry draft targets admin and preserves punctuation and line breaks', () => {
  const draft = new URL(buildDraft({ name: '  A & B  ', topic: 'Project quote', location: 'Boksburg', message: 'Panels & controls?\nTimeline: 6 weeks #1' }));
  assert.equal(draft.protocol, 'mailto:');
  assert.equal(draft.pathname, 'enquiries@moziserve.co.za');
  assert.equal(draft.searchParams.get('subject'), 'Moziserve: Project quote');
  assert.equal(draft.searchParams.get('body'), 'Name: A & B\r\nProject location: Boksburg\r\n\r\nPanels & controls?\nTimeline: 6 weeks #1');
});

test('user content cannot inject another email recipient or subject header', () => {
  const draft = new URL(buildDraft({ name: 'Name\r\nBcc: other@example.com', topic: 'Unexpected\r\nBcc: other@example.com', location: '', message: 'Query &bcc=other@example.com' }));
  assert.equal(draft.pathname, 'enquiries@moziserve.co.za');
  assert.equal(draft.searchParams.get('subject'), 'Moziserve: General query');
  assert.equal(draft.searchParams.has('bcc'), false);
  assert.match(draft.searchParams.get('body'), /Project location: Not specified/);
});
