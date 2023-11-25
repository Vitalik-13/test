const fixedHeader = document.querySelector(".header");
const showButton = document.querySelector(".button__header");
const changeColorLogo = document.querySelector(".foto");

document.addEventListener("scroll", () => {
  if (scrollY > 50) {
    fixedHeader.classList.add("fixed_header");
    showButton.classList.add("show");
    changeColorLogo.classList.add("color");
  } else {
    fixedHeader.classList.remove("fixed_header");
    showButton.classList.remove("show");
    changeColorLogo.classList.remove("color");
  }
});

const descripshionListTitle = document.querySelectorAll(".sup-list");
const showSpanDescripshion = document.querySelectorAll(".sup-text");
const imageTitleDescripshion = document.querySelectorAll(".shewron");

descripshionListTitle.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    showSpanDescripshion[idx].classList.toggle("show");
    imageTitleDescripshion[idx].classList.toggle("arrow-rotation");
  });
});
