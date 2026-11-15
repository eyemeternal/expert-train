const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

// Exercise the shipped controller against events and a deterministic clock.
// This does not simulate browser layout, media decoding, or real touch gestures.
function setup({ reduced = false, saveData = false } = {}) {
  class Element extends EventTarget {
    constructor(values = {}) { super(); Object.assign(this, values); }
    emit(type, values = {}) {
      const event = new Event(type);
      Object.assign(event, values);
      this.dispatchEvent(event);
    }
  }
  const desktop = 'https://videos.pexels.com/desktop.mp4';
  const mobile = 'https://videos.pexels.com/mobile.mp4';
  const source = new Element({ src: desktop, dataset: { desktop, mobile } });
  const hero = new Element({ style: {} });
  const film = new Element({ paused: true, hidden: /<video[^>]*\bhidden/.test(fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8')), poster: 'desktop.jpg', loads: 0, plays: 0 });
  film.querySelector = () => source;
  film.closest = () => hero;
  film.load = () => { film.loads++; };
  film.play = () => { if (film.rejectPlay) return Promise.reject(new Error('Playback denied')); film.plays++; film.paused = false; film.emit('play'); film.emit('playing'); return Promise.resolve(); };
  film.pause = () => { film.paused = true; film.emit('pause'); };
  const toggle = new Element({ hidden: true });
  const credit = new Element({ href: 'desktop-credit' });
  const preview = new Element({ clientWidth: 1440 });
  const rail = new Element({ scrollWidth: 1400, clientWidth: 400, scrollLeft: 0,
    children: [0, 300, 600, 900, 1200, 1500].map(offsetLeft => ({ offsetLeft })) });
  rail.contains = element => element === railLink;
  rail.scrollTo = options => { rail.scrollLeft = options.left; rail.lastBehavior = options.behavior; };
  const railLink = new Element();
  const previous = new Element({ dataset: { step: '-1' } });
  const next = new Element({ dataset: { step: '1' } });
  const controls = new Element({ querySelectorAll: () => [previous, next] });
  const motion = new Element({ matches: reduced });
  const connection = new Element({ saveData });
  const nodes = { '.preview': preview, '.hero-video': film, '.film-toggle': toggle,
    '.film-controls a': credit, '.rail': rail, '.rail-controls': controls };
  const document = new Element({ hidden: false, activeElement: null, querySelector: selector => nodes[selector] });
  const observers = new Map();
  let resize;
  let now = 0;
  let id = 0;
  const timers = new Map();
  const context = { document, navigator: { connection }, matchMedia: () => motion,
    ResizeObserver: class { constructor(callback) { resize = callback; } observe() { resize(); } },
    IntersectionObserver: class { constructor(callback) { this.callback = callback; } observe(target) { observers.set(target, this.callback); } },
    setTimeout: (callback, delay) => { timers.set(++id, { at: now + delay, callback }); return id; },
    clearTimeout: timer => timers.delete(timer), queueMicrotask };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/home.js'), 'utf8'), context);
  function advance(ms) {
    const end = now + ms;
    while (true) {
      const due = [...timers].filter(([, t]) => t.at <= end).sort((a, b) => a[1].at - b[1].at)[0];
      if (!due) break;
      now = due[1].at; timers.delete(due[0]); due[1].callback();
    }
    now = end;
  }
  return { film, source, toggle, preview, rail, previous, next, document, motion, connection,
    railLink, advance, resize: () => resize(), visible: (target, value) => observers.get(target === film ? hero : target)([{ isIntersecting: value }]) };
}

test('data saving prevents automatic playback and video loading', () => {
  const s = setup({ saveData: true });
  s.visible(s.film, true);
  assert.equal(s.film.plays, 0);
  assert.equal(s.film.loads, 0);
  assert.equal(s.film.hidden, true);
});

test('reduced motion retains the poster after a preference change', () => {
  const s = setup(); s.visible(s.film, true);
  s.motion.matches = true; s.motion.emit('change');
  assert.equal(s.film.paused, true);
  assert.equal(s.film.hidden, true);
});

test('media failure restores poster and removes unusable playback control', async () => {
  const s = setup(); s.visible(s.film, true);
  s.film.emit('error'); await Promise.resolve();
  assert.equal(s.film.hidden, true);
  assert.equal(s.toggle.hidden, true);
});

test('visible desktop and mobile select their corresponding video and credit', () => {
  const s = setup(); s.visible(s.film, true);
  assert.match(s.source.src, /desktop/);
  assert.equal(s.film.paused, false);
  s.preview.clientWidth = 360; s.resize();
  assert.match(s.source.src, /mobile/);
  assert.match(s.film.poster, /10058463/);
  s.toggle.emit('click'); assert.equal(s.film.paused, true);
  s.visible(s.film, false); s.visible(s.film, true);
  assert.equal(s.film.paused, true);
});

test('service rail advances only while visible and arrows make it manual', () => {
  const s = setup(); s.advance(6000); assert.equal(s.rail.scrollLeft, 0);
  s.visible(s.rail, true); s.advance(5200); assert.equal(s.rail.scrollLeft, 300);
  s.next.emit('click'); assert.equal(s.rail.scrollLeft, 600);
  s.advance(12000); assert.equal(s.rail.scrollLeft, 600);
  s.previous.emit('click'); assert.equal(s.rail.scrollLeft, 300);
});

test('rail suspends for hover, touch, focus, hidden documents and offscreen sections', () => {
  const s = setup(); s.visible(s.rail, true);
  for (const [start, stop] of [
    [() => s.rail.emit('pointerenter', { pointerType: 'mouse' }), () => s.rail.emit('pointerleave')],
    [() => s.rail.emit('touchstart'), () => s.rail.emit('touchend', { touches: [] })],
    [() => { s.document.activeElement = s.railLink; s.rail.emit('focusin'); }, () => { s.document.activeElement = null; s.rail.emit('focusin'); }],
    [() => { s.document.hidden = true; s.document.emit('visibilitychange'); }, () => { s.document.hidden = false; s.document.emit('visibilitychange'); }],
    [() => s.visible(s.rail, false), () => s.visible(s.rail, true)]
  ]) {
    const initial = s.rail.scrollLeft; start(); s.advance(6000); assert.equal(s.rail.scrollLeft, initial);
    stop(); s.advance(5200); assert.notEqual(s.rail.scrollLeft, initial);
  }
});

test('reduced-motion services stay manual and use immediate movement', () => {
  const s = setup({ reduced: true }); s.visible(s.rail, true); s.advance(12000);
  assert.equal(s.rail.scrollLeft, 0); s.next.emit('click');
  assert.equal(s.rail.scrollLeft, 300); assert.equal(s.rail.lastBehavior, 'instant');
});


test('initial reduced motion and offscreen hero avoid media loads', () => {
  const reduced = setup({ reduced: true }); reduced.visible(reduced.film, true);
  assert.equal(reduced.film.loads, 0); assert.equal(reduced.film.plays, 0);
  const offscreen = setup(); offscreen.preview.clientWidth = 360; offscreen.resize();
  assert.equal(offscreen.film.loads, 0); assert.equal(offscreen.film.plays, 0);
});

test('playback rejection keeps the poster and permits an explicit retry', async () => {
  const s = setup(); s.film.rejectPlay = true; s.visible(s.film, true);
  await Promise.resolve();
  assert.equal(s.film.hidden, true); assert.equal(s.toggle.hidden, false);
  s.film.rejectPlay = false; s.toggle.emit('click');
  assert.equal(s.film.hidden, false); assert.equal(s.film.paused, false);
});

test('source errors show the poster, and switching videos permits recovery', () => {
  const s = setup(); s.visible(s.film, true); s.source.emit('error');
  assert.equal(s.film.hidden, true); assert.equal(s.toggle.hidden, true);
  s.preview.clientWidth = 360; s.resize();
  assert.equal(s.film.hidden, false); assert.equal(s.toggle.hidden, false);
});

test('rail wraps in both directions without moving focus from an arrow', () => {
  const s = setup(); s.document.activeElement = s.previous;
  s.previous.emit('click'); assert.equal(s.rail.scrollLeft, 1000);
  s.next.emit('click'); assert.equal(s.rail.scrollLeft, 0);
  assert.equal(s.document.activeElement, s.previous);
});
