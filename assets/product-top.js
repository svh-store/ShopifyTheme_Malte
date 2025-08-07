document.addEventListener('DOMContentLoaded', function () {
  const main = document.getElementById('productTopMain');
  const thumbs = Array.from(document.querySelectorAll('.product-top__thumb'));
  const prev = document.querySelector('.product-top__arrow--prev');
  const next = document.querySelector('.product-top__arrow--next');
  let current = 0;

  function show(index) {
    if (!thumbs.length) return;
    current = (index + thumbs.length) % thumbs.length;
    const active = thumbs[current];
    main.src = active.dataset.full;
    thumbs.forEach(t => t.classList.remove('is-active'));
    active.classList.add('is-active');
  }

  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => show(idx));
  });

  if (prev && next) {
    prev.addEventListener('click', () => show(current - 1));
    next.addEventListener('click', () => show(current + 1));
  }

  const variantInputs = document.querySelectorAll('.product-info-card__variant input');
  variantInputs.forEach(input => {
    input.addEventListener('change', () => {
      const idx = parseInt(input.dataset.index, 10);
      if (!isNaN(idx)) show(idx);
    });
  });
});
