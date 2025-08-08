(function(){
  function applyHeaderPadding(){
    const header = document.querySelector('store-header.header');
    if(!header) return;

    const container = header.querySelector('.header__grid.container') || header;
    const logoWrap  = header.querySelector('.header__logo');
    const iconWrap  = header.querySelector('.header__icons');

    if(!container || !logoWrap || !iconWrap) return;

    // reale Breiten messen (inkl. etwas Luft)
    const logoW = Math.ceil(logoWrap.getBoundingClientRect().width);
    const iconsW = Math.ceil(iconWrap.getBoundingClientRect().width);

    const edge = 16; // muss zu --cg-header-edge passen
    const padL = logoW + edge + 12;   // +12px Luft
    const padR = iconsW + edge + 12;

    container.style.setProperty('--cg-pad-left',  padL + 'px');
    container.style.setProperty('--cg-pad-right', padR + 'px');
  }

  const run = () => requestAnimationFrame(applyHeaderPadding);

  document.addEventListener('DOMContentLoaded', run);
  window.addEventListener('resize', run);
  // Wenn der Shopify-Editor die Section neu rendert
  document.addEventListener('shopify:section:load', run);
  document.addEventListener('shopify:section:select', run);
})();

document.addEventListener('DOMContentLoaded', initSearchOverlay);
document.addEventListener('shopify:section:load', initSearchOverlay);

function initSearchOverlay(){
  const header = document.querySelector('store-header.header');
  if(!header) return;

  const ps      = header.querySelector('predictive-search') || document.querySelector('predictive-search');
  if(!ps) return;

  const trigger = header.querySelector('.js-show-search, .header__icons a[href*="/search"], .header__icons button');
  const input   = ps.querySelector('.js-search-input');
  const overlay = ps.querySelector('.overlay');
  const form    = ps.querySelector('.search__form');
  const results = ps.querySelector('.js-search-results');

  // Öffnen
  if (trigger) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();             // WICHTIG: sonst schließt der globale Click sofort wieder
      ps.setAttribute('open','');
      if (input) setTimeout(() => input.focus(), 20);
    });
  }

  // Overlay-Klick schließt
  if (overlay) overlay.addEventListener('click', () => ps.removeAttribute('open'));

  // Klick irgendwo außerhalb von Formular/Ergebnissen schließt
  document.addEventListener('click', (e) => {
    if (!ps.hasAttribute('open')) return;
    const insideForm    = form && form.contains(e.target);
    const insideResults = results && results.contains(e.target);
    const insideTrigger = trigger && trigger.contains(e.target);
    if (insideForm || insideResults || insideTrigger) return;
    ps.removeAttribute('open');
  });

  // ESC schließt
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') ps.removeAttribute('open');
  });
}
