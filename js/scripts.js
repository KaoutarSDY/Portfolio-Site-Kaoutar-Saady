console.log('Hello world demo');
$(document).ready(function () {
    $('.navbar-toggle').click(function () {
      $('.navbar-menu').toggle();
    });
  });
  const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});