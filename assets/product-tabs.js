document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-info__tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.offcanvasTarget);
      if (!target) return;
      target.removeAttribute('hidden');
      document.body.classList.add('overflow-hidden');
    });
  });

  document.querySelectorAll('.product-info__offcanvas').forEach(canvas => {
    const close = canvas.querySelector('.product-info__offcanvas-close');
    const overlay = canvas.querySelector('.product-info__offcanvas-overlay');
    const closeCanvas = () => {
      canvas.setAttribute('hidden', 'hidden');
      document.body.classList.remove('overflow-hidden');
    };
    if (close) close.addEventListener('click', closeCanvas);
    if (overlay) overlay.addEventListener('click', closeCanvas);
  });
});
