$(document).ready(function () {
  $(".rewies-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 488,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const fixedHeader = document.querySelector(".header");
const showButton = document.querySelector(".button__header");
const changeColorLogo = document.querySelector(".logo-span");

document.addEventListener("scroll", () => {
  if (scrollY > 50) {
    fixedHeader.classList.add("fixed_header");
    showButton.classList.add("show");
  } else {
    fixedHeader.classList.remove("fixed_header");
  }
});

const descripshionListTitle = document.querySelectorAll(".sup-list");
const showSpanDescripshion = document.querySelectorAll(".sup-text");
const imageTitleDescripshion = document.querySelectorAll(".shewron");

descripshionListTitle.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    showSpanDescripshion[idx].classList.toggle("show");
    descripshionListTitle[idx].classList.toggle("change-color");
    imageTitleDescripshion[idx].classList.toggle("arrow-rotation");
  });
});

const burgerMenu = document.querySelector("#check");
const menuNavigation = document.querySelector(".menu-navigation");
burgerMenu.addEventListener("change", () => {
  if (burgerMenu.checked) {
    menuNavigation.classList.add("transform-menu");
  } else {
    menuNavigation.classList.remove("transform-menu");
  }
});
const listNavigation = document.querySelectorAll(".list-navigation");
listNavigation.forEach((item) => {
  item.addEventListener("click", () => {
    menuNavigation.classList.remove("transform-menu");
    burgerMenu.checked = false;
  });
});
