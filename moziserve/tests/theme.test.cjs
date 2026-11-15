const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const code = fs.readFileSync(path.join(__dirname, '../assets/theme.js'), 'utf8');

function openPage(storage = new Map(), unavailable = false) {
  const root = { dataset: {} };
  const button = new EventTarget();
  button.attributes = {};
  button.setAttribute = (name, value) => { button.attributes[name] = value; };
  button.hidden = true;
  const document = new EventTarget();
  document.documentElement = root;
  document.querySelectorAll = () => [button];
  vm.runInNewContext(code, { document, localStorage: {
    getItem: key => { if (unavailable) throw Error('Storage blocked'); return storage.get(key); },
    setItem: (key, value) => { if (unavailable) throw Error('Storage blocked'); storage.set(key, value); }
  } });
  const initialTheme = root.dataset.theme;
  document.dispatchEvent(new Event('DOMContentLoaded'));
  return { root, button, initialTheme, click: () => button.dispatchEvent(new Event('click')) };
}

test('dark mode applies before controls initialize and exposes its state', () => {
  const page = openPage();
  assert.equal(page.initialTheme, 'dark');
  assert.equal(page.button.hidden, false);
  assert.equal(page.button.attributes['aria-pressed'], 'true');
  assert.equal(page.button.title, 'Switch to light mode');
});

test('toggle updates theme, accessible state, and subsequent page preference', () => {
  const storage = new Map();
  const page = openPage(storage);
  page.click();
  assert.equal(page.root.dataset.theme, 'light');
  assert.equal(page.button.attributes['aria-pressed'], 'false');
  assert.equal(openPage(storage).initialTheme, 'light');
  page.click();
  assert.equal(openPage(storage).initialTheme, 'dark');
});

test('blocked storage does not break the toggle', () => {
  const page = openPage(new Map(), true);
  page.click(); assert.equal(page.root.dataset.theme, 'light');
  page.click(); assert.equal(page.root.dataset.theme, 'dark');
});

test('unrecognized stored values fall back to dark mode', () => {
  assert.equal(openPage(new Map([['moziserve-theme', 'invalid']])).initialTheme, 'dark');
});
