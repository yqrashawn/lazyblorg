document.addEventListener("DOMContentLoaded", function() {
  var menu = document.querySelector('.menu-closer');

  menu.onclick = function(e) {
    toggleClass(document.querySelector('.menu-in'), 'over');
    toggleClass(document.querySelector('.linea1'), 'overL1');
    toggleClass(document.querySelector('.linea2'), 'overL2');
    toggleClass(document.querySelector('.linea3'), 'overL3');
    toggleClass(document.querySelector('.voci-menu'), 'overvoci');
  };

  function toggleClass(div, className) {
    div.classList.toggle(className);
  }
});