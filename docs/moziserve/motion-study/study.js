const preview = document.querySelector('.preview');
const themeToggle = document.querySelector('.theme-toggle');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
const film = document.querySelector('.hero-video');
const source = film.querySelector('source');
const filmCredit = document.querySelector('.film-controls a');
const rail = document.querySelector('.rail');
const controls = document.querySelector('.rail-controls');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const desktopFilm = source.src;
const desktopCredit = filmCredit.href;
const mobileCredit = 'https://www.pexels.com/video/close-up-shot-of-insulators-in-substation-10058463/';
const mobilePoster = 'https://images.pexels.com/videos/10058463/current-electrical-line-electricity-equipment-10058463.jpeg?auto=compress&w=1260';
const desktopPoster = film.poster;
let filmVisible = false;
let railVisible = false;
let touchingRail = false;
let pointerOverRail = false;
let railTimer;
let manualRail = false;

function syncFilm() {
  if (reduceMotion.matches || film.currentTime >= 4.5 || !filmVisible || document.hidden) {
    film.pause();
  } else {
    film.play().catch(() => {});
  }
}

function updateFilmSource() {
  const mobile = preview.clientWidth <= 600;
  const url = mobile ? source.dataset.mobile : desktopFilm;
  if (source.src === url) return;
  source.src = url;
  film.poster = mobile ? mobilePoster : desktopPoster;
  filmCredit.href = mobile ? mobileCredit : desktopCredit;
  film.load();
  syncFilm();
}

let themePreference;
try {
  themePreference = localStorage.getItem('moziserve-theme');
} catch {
  // Keep the theme available when storage is disabled.
}

function applyTheme() {
  const dark = themePreference ? themePreference === 'dark' : systemTheme.matches;
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(dark));
}

themeToggle.hidden = false;
themeToggle.addEventListener('click', () => {
  themePreference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  try {
    localStorage.setItem('moziserve-theme', themePreference);
  } catch {
    // The selected theme still applies to this page.
  }
  applyTheme();
});
systemTheme.addEventListener('change', applyTheme);
applyTheme();

film.addEventListener('timeupdate', () => {
  if (film.currentTime >= 4.5) film.pause();
});
new ResizeObserver(updateFilmSource).observe(preview);
new IntersectionObserver(([entry]) => {
  filmVisible = entry.isIntersecting;
  syncFilm();
}, { threshold: .15 }).observe(film);

function moveRail(direction) {
  const cards = [...rail.children];
  const firstLeft = cards[0].offsetLeft;
  const maximum = rail.scrollWidth - rail.clientWidth;
  const stops = cards.map(card => Math.min(card.offsetLeft - firstLeft, maximum));
  const positions = [...new Set(stops)];
  const current = rail.scrollLeft;
  const target = direction > 0
    ? (positions.find(position => position > current + 3) ?? 0)
    : (positions.findLast(position => position < current - 3) ?? maximum);
  rail.scrollTo({ left: target, behavior: reduceMotion.matches ? 'instant' : 'smooth' });
}

function scheduleRail() {
  clearTimeout(railTimer);
  if (manualRail || reduceMotion.matches || !railVisible || touchingRail || pointerOverRail ||
      document.hidden || rail.contains(document.activeElement)) return;
  railTimer = setTimeout(() => {
    moveRail(1);
    scheduleRail();
  }, 5200);
}

controls.hidden = false;
for (const button of controls.querySelectorAll('[data-step]')) {
  button.addEventListener('click', () => {
    manualRail = true;
    moveRail(Number(button.dataset.step));
    scheduleRail();
  });
}
rail.addEventListener('pointerenter', event => {
  pointerOverRail = event.pointerType === 'mouse';
  scheduleRail();
});
rail.addEventListener('pointerleave', () => {
  pointerOverRail = false;
  scheduleRail();
});
rail.addEventListener('touchstart', () => {
  touchingRail = true;
  scheduleRail();
}, { passive: true });
function endTouch(event) {
  touchingRail = event.touches.length > 0;
  scheduleRail();
}
rail.addEventListener('touchend', endTouch);
rail.addEventListener('touchcancel', endTouch);
rail.addEventListener('focusin', scheduleRail);
rail.addEventListener('focusout', () => queueMicrotask(scheduleRail));
rail.addEventListener('scrollend', scheduleRail);
new IntersectionObserver(([entry]) => {
  railVisible = entry.isIntersecting;
  scheduleRail();
}, { threshold: .35 }).observe(rail);
document.addEventListener('visibilitychange', () => {
  syncFilm();
  scheduleRail();
});
reduceMotion.addEventListener('change', () => {
  syncFilm();
  scheduleRail();
});
