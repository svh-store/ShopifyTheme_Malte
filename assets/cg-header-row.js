document.addEventListener('DOMContentLoaded', initHeaderSearchRedirect);
document.addEventListener('shopify:section:load', initHeaderSearchRedirect);

function initHeaderSearchRedirect() {
  const header = document.querySelector('store-header.header');
  if (!header) return;

  // alle möglichen Lupen/Buttons im Icon-Cluster
  const triggers = header.querySelectorAll(
    '.js-show-search, .header__icons a[href*="/search"], .header__icons button, .header__icons .search-toggle'
  );

  triggers.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      // immer auf die native Suchseite gehen
      window.location.href = `${window.Shopify?.routes?.search_url || '/search'}`;
    });
  });
}
