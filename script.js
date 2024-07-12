//hamburger menu

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

//back to top button

let backToTopButton = document.querySelector('.back-to-top');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}
