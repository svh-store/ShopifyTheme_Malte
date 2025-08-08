window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-tab-button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.tabTarget);
      if (target) target.removeAttribute('hidden');
    });
  });

  document.querySelectorAll('.product-tab-offcanvas').forEach((panel) => {
    panel.addEventListener('click', (evt) => {
      if (evt.target.hasAttribute('data-tab-close') || evt.target === panel) {
        panel.setAttribute('hidden', true);
      }
    });
  });
});
