document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-product-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-target');
      const drawer = document.getElementById(id);
      if (drawer && typeof drawer.open === 'function') {
        drawer.open(btn);
      }
    });
  });
});
