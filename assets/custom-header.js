document.addEventListener("DOMContentLoaded", function() {
  const searchIcon = document.querySelector(".header__right .search-icon");
  const searchOverlay = document.querySelector(".search-overlay");
  const searchInput = document.querySelector(".search-overlay input");
  const overlayBg = document.querySelector(".search-overlay");

  if (searchIcon && searchOverlay) {
    searchIcon.addEventListener("click", function(e) {
      e.preventDefault();
      searchOverlay.classList.add("active");
      setTimeout(() => searchInput.focus(), 100);
    });
  }

  // Klick außerhalb schließt Overlay
  overlayBg.addEventListener("click", function(e) {
    if (e.target === overlayBg) {
      searchOverlay.classList.remove("active");
    }
  });

  // ESC-Taste schließt Overlay
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      searchOverlay.classList.remove("active");
    }
  });
});
