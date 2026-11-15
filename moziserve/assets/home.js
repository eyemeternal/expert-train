const preview = document.querySelector('.preview');
const film = document.querySelector('.hero-video');
const source = film.querySelector('source');
const filmToggle = document.querySelector('.film-toggle');
const rail = document.querySelector('.rail');
const controls = document.querySelector('.rail-controls');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const desktopFilm = source.dataset.desktop;
const mobilePoster = 'https://images.pexels.com/videos/10058463/current-electrical-line-electricity-equipment-10058463.jpeg?auto=compress&w=1260';
const desktopPoster = film.poster;
const connection = navigator.connection;
let filmPausedByUser = false;
let filmRequestedByUser = false;
let filmFailed = false;
let loadedFilm = '';
let filmVisible = false;
let railVisible = false;
let touchingRail = false;
let pointerOverRail = false;
let railTimer;
let manualRail = false;

function posterOnly() {
  return (reduceMotion.matches || connection?.saveData) && !filmRequestedByUser;
}

function updateFilmControl() {
  filmToggle.textContent = filmPausedByUser || posterOnly()
    ? 'Enable background video' : 'Disable background video';
}

function showPoster() {
  film.hidden = true;
  film.pause();
}

function playFilm() {
  film.play().catch(() => {
    showPoster();
    filmPausedByUser = true;
    updateFilmControl();
  });
}

function syncFilm() {
  updateFilmControl();
  if (posterOnly() || filmFailed) {
    showPoster();
  } else if (filmPausedByUser || !filmVisible || document.hidden) {
    film.pause();
  } else {
    if (loadedFilm !== source.src) {
      loadedFilm = source.src;
      film.load();
    }
    playFilm();
  }
}

function updateFilmSource() {
  const mobile = preview.clientWidth <= 600;
  const url = mobile ? source.dataset.mobile : desktopFilm;
  const poster = mobile ? mobilePoster : desktopPoster;
  film.poster = poster;
  film.closest('.hero').style.backgroundImage = `url("${poster}")`;
  if (source.src !== url) {
    showPoster();
    source.src = url;
    filmFailed = false;
    filmToggle.hidden = false;
  }
  syncFilm();
}

filmToggle.hidden = false;
updateFilmControl();
filmToggle.addEventListener('click', () => {
  filmPausedByUser = !(filmPausedByUser || posterOnly());
  if (filmPausedByUser) {
    film.pause();
    updateFilmControl();
  }
  else {
    filmRequestedByUser = true;
    syncFilm();
  }
});
film.addEventListener('playing', () => {
  film.hidden = false;
  updateFilmControl();
});
film.addEventListener('pause', updateFilmControl);
function mediaFailed() {
  filmFailed = true;
  showPoster();
  filmToggle.hidden = true;
}
film.addEventListener('error', mediaFailed);
source.addEventListener('error', mediaFailed);
new ResizeObserver(updateFilmSource).observe(preview);
new IntersectionObserver(([entry]) => {
  filmVisible = entry.isIntersecting;
  syncFilm();
}, { threshold: .15 }).observe(film.closest('.hero'));

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
  filmRequestedByUser = false;
  syncFilm();
  scheduleRail();
});

connection?.addEventListener('change', () => {
  filmRequestedByUser = false;
  syncFilm();
});
