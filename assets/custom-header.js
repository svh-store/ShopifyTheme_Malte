document.addEventListener('DOMContentLoaded', initHeaderSearch);
document.addEventListener('shopify:section:load', initHeaderSearch);

function initHeaderSearch() {
  const header = document.querySelector('store-header.header');
  if (!header) return;

  // 1) Lupen-Trigger finden (minimierte Suche)
  const trigger = header.querySelector('.js-show-search, .header__icons a[href*="/search"]');

  // 2) Predictive Search Element + Teile
  const ps = header.querySelector('predictive-search') || document.querySelector('predictive-search');
  if (!trigger || !ps) return;

  const input = ps.querySelector('.js-search-input');
  const overlay = ps.querySelector('.overlay');

  // Klick auf Lupe -> Overlay sicher öffnen
  trigger.addEventListener('click', (e) => {
    e.preventDefault();

    // Manche Themes togglen erst die "inline"-Suche – wir erzwingen das Modal:
    ps.setAttribute('open', '');

    // Fokus ins Eingabefeld
    if (input) {
      // Kleiner Timeout, falls CSS/DOM noch transitioned
      setTimeout(() => input.focus(), 20);
    }
  });

  // Overlay-Klick schließt
  if (overlay) {
    overlay.addEventListener('click', () => ps.removeAttribute('open'));
  }

  // ESC schließt
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') ps.removeAttribute('open'));
  });
}
