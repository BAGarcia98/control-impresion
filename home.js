const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active'); /* Agrega o quita la clase "active" al menú */
});

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }
  