document.addEventListener("DOMContentLoaded", function() {
  const searchTrigger = document.querySelector('.header__icons .icon-search'); // evtl. Klasse anpassen
  const overlay = document.getElementById('SearchOverlay');
  const closeBtn = document.getElementById('SearchClose');

  if(searchTrigger){
    searchTrigger.addEventListener('click', function(e){
      e.preventDefault();
      overlay.classList.add('open');
      document.getElementById('SearchInput').focus();
    });
  }

  if(closeBtn){
    closeBtn.addEventListener('click', function(){
      overlay.classList.remove('open');
    });
  }

  overlay.addEventListener('click', function(e){
    if(e.target === overlay){
      overlay.classList.remove('open');
    }
  });

  document.addEventListener('keydown', function(e){
    if(e.key === "Escape"){
      overlay.classList.remove('open');
    }
  });
});
