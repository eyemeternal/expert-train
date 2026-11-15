const preview = document.querySelector('.preview');
const viewButtons = [...document.querySelectorAll('[data-view]')];
const film = document.querySelector('.hero-video');
const source = film.querySelector('source');
const filmToggle = document.querySelector('.film-toggle');
const filmCredit = document.querySelector('.film-controls a');
const rail = document.querySelector('.rail');
const controls = document.querySelector('.rail-controls');
const railToggle = document.querySelector('.rail-toggle');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const desktopFilm = source.src;
const desktopCredit = filmCredit.href;
const mobileCredit = 'https://www.pexels.com/video/close-up-shot-of-insulators-in-substation-10058463/';
const mobilePoster = 'https://images.pexels.com/videos/10058463/current-electrical-line-electricity-equipment-10058463.jpeg?auto=compress&w=1260';
const desktopPoster = film.poster;
let filmPausedByUser = false;
let filmVisible = false;
let railPaused = reduceMotion.matches;
let railVisible = false;
let touchingRail = false;
let pointerOverRail = false;
let railTimer;

function syncFilm() {
  if (reduceMotion.matches || filmPausedByUser || !filmVisible || document.hidden) {
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

for (const button of viewButtons) {
  button.addEventListener('click', () => {
    preview.dataset.layout = button.dataset.view;
    for (const choice of viewButtons) {
      choice.setAttribute('aria-pressed', String(choice === button));
    }
    updateFilmSource();
  });
}

filmToggle.hidden = false;
filmToggle.textContent = 'Play film';
filmToggle.addEventListener('click', () => {
  filmPausedByUser = !film.paused;
  if (filmPausedByUser) film.pause();
  else film.play().catch(() => {});
});
film.addEventListener('play', () => { filmToggle.textContent = 'Pause film'; });
film.addEventListener('pause', () => { filmToggle.textContent = 'Play film'; });
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
  if (railPaused || !railVisible || touchingRail || pointerOverRail ||
      document.hidden || rail.contains(document.activeElement)) return;
  railTimer = setTimeout(() => {
    moveRail(1);
    scheduleRail();
  }, 5200);
}

controls.hidden = false;
railToggle.textContent = railPaused ? 'Play' : 'Pause';
railToggle.addEventListener('click', () => {
  railPaused = !railPaused;
  railToggle.textContent = railPaused ? 'Play' : 'Pause';
  scheduleRail();
});
for (const button of controls.querySelectorAll('[data-step]')) {
  button.addEventListener('click', () => {
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
reduceMotion.addEventListener('change', event => {
  if (event.matches) {
    railPaused = true;
    railToggle.textContent = 'Play';
  }
  syncFilm();
  scheduleRail();
});
