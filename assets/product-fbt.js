document.addEventListener('click', (e) => {
  if (e.target.matches('.fbt-add')) {
    const ids = e.target.dataset.products.split(',').map(id => ({ id: parseInt(id, 10), quantity: 1 }));
    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: ids })
    }).then(() => { window.location.href = '/cart'; });
  }
});
