function toggleMenu() {
  var menu = document.getElementById('smallMenu');
  if (menu.classList.contains('w3-hide')) {
    menu.classList.remove('w3-hide');
  } else {
    menu.classList.add('w3-hide');
  }
}
