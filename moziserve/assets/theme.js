(() => {
  const root = document.documentElement;
  let theme = 'dark';
  try {
    const saved = localStorage.getItem('moziserve-theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch {
    // The toggle remains usable when browser storage is unavailable.
  }
  root.dataset.theme = theme;

  document.addEventListener('DOMContentLoaded', () => {
    for (const button of document.querySelectorAll('.theme-toggle')) {
      function update() {
        const dark = root.dataset.theme === 'dark';
        button.setAttribute('aria-pressed', String(dark));
        button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
      }
      button.hidden = false;
      update();
      button.addEventListener('click', () => {
        const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        try {
          localStorage.setItem('moziserve-theme', next);
        } catch {
          // Apply the choice for this page even if it cannot be saved.
        }
        update();
      });
    }
  });
})();
