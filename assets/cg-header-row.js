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
