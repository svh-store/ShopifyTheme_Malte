class ProductTabsOffcanvas {
  constructor(container) {
    this.container = container;
    this.overlay = container.querySelector('[data-offcanvas-overlay]');
    this.buttons = container.querySelectorAll('[data-offcanvas-target]');
    this.panels = container.querySelectorAll('.product-offcanvas');
    this.closeButtons = container.querySelectorAll('[data-offcanvas-close]');
    this.activePanel = null;
    this.addEvents();
  }
  addEvents() {
    this.buttons.forEach((btn) => {
      btn.addEventListener('click', () => this.open(btn.dataset.offcanvasTarget));
    });
    this.closeButtons.forEach((btn) => btn.addEventListener('click', () => this.close()));
    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.close());
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
  }
  open(id) {
    const panel = this.container.querySelector(`#offcanvas-${id}`);
    if (!panel) return;
    this.activePanel = panel;
    panel.classList.add('is-active');
    if (this.overlay) this.overlay.classList.add('is-active');
    document.body.classList.add('offcanvas-open');
  }
  close() {
    if (this.activePanel) {
      this.activePanel.classList.remove('is-active');
      this.activePanel = null;
    }
    if (this.overlay) this.overlay.classList.remove('is-active');
    document.body.classList.remove('offcanvas-open');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-info-tabs').forEach((el) => new ProductTabsOffcanvas(el));
});
