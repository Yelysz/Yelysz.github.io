// script.js

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('closeMenu');
  
    // Abrir el menú
    menuButton.addEventListener('click', function () {
      menu.classList.add('open');
      menu.style.animation = 'slideIn 0.5s ease-in-out forwards';
    });
  
    // Cerrar el menú
    closeMenu.addEventListener('click', function () {
      menu.classList.remove('open');
      menu.style.animation = 'fadeOut 0.5s ease-in-out forwards';
    });
  });
  