document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.querySelector('.header .js-show-search, .header a.header__icon[href*="/search"]');
  const ps = document.querySelector('predictive-search') || document.querySelector('.header predictive-search');

  if (!trigger || !ps) return;

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    ps.setAttribute('open', '');
    const input = ps.querySelector('.js-search-input');
    if (input) input.focus();
  });

  // Overlay-Klick oder ESC schließt
  const overlay = ps.querySelector('.overlay');
  if (overlay) overlay.addEventListener('click', () => ps.removeAttribute('open'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') ps.removeAttribute('open');
  });
});
