(function fixHeaderOrder(){
  function apply(){
    const header = document.querySelector('store-header.header');
    if(!header) return;

    const grid  = header.querySelector('.header__grid.container') || header;
    const logo  = grid.querySelector('.header__logo');
    const menu  = grid.querySelector('.main-menu__content');
    const icons = grid.querySelector('.header__icons');

    // Nur wenn vorhanden – dann Reihenfolge hart festlegen
    if(logo)  logo.style.order  = 1;
    if(menu)  menu.style.order  = 2;
    // minimierte Suche (falls dazwischen) bekommt auch Order 2
    grid.querySelectorAll('.header__search').forEach(el => el.style.order = 2);
    if(icons){
      icons.style.order = 3;
      // Falls irgendein anderes CSS die Icons „zieht“
      icons.style.marginLeft = 'auto';
      icons.style.justifyContent = 'flex-end';
    }
  }

  // beim ersten Load
  document.addEventListener('DOMContentLoaded', apply);
  // wenn der Theme-Editor Sektionen neu rendert
  document.addEventListener('shopify:section:load', apply);
})();
