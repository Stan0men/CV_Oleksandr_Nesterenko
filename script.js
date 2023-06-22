//hamburger menu

window.onload = function () {
  var menuToggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("open");
    menu.classList.toggle("open");
  });
};

//back to top button

let backToTopButton = document.querySelector(".back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}
