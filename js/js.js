// let btn = document.querySelector(".footer-middle > ul > li");

// // btn.addEventListener("click", (event) => {
// //   sub.style.opacity = "1";
// // });
// // sub.addEventListener("click", (event) => {
// //   sub.style.opacity = "0";
// // });

// btn.addEventListener("click", function (event) {
//   sub.style.opacity = "1";
// });

// let sub = document.querySelector(".footer-middle_sub");

// sub.removeEventListener("click", function (event) {
//   sub.style.opacity = "1";
// });

const callButton = document.getElementById("call-button");
const menu = document.getElementById("menu");
const ul = menu.querySelector("ul");

let isMenuOpen = false;

callButton.addEventListener("click", () => {
  if (!isMenuOpen) {
    menu.style.display = "block";
    isMenuOpen = true;
  }
});

ul.addEventListener("click", (event) => {
  event.stopPropagation();
  if (isMenuOpen) {
    menu.style.display = "none";
    isMenuOpen = false;
  }
});
