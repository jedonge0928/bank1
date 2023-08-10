//menu

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

// //tab
// // 해당 코드는 페이지가 로드될 때, HTML 문서 요소가 모두 로드된 후에 실행되어야 합니다.
// window.addEventListener("DOMContentLoaded", function () {
//   // 모든 li 요소들을 선택합니다.
//   const tabMenuItems = document.querySelectorAll(".tabMenu li");
//   const tabconItems = document.querySelectorAll(".tabcon");

//   // 각 li 요소에 대한 클릭 이벤트를 추가합니다.
//   tabMenuItems.forEach(function (tabMenuItem, idx) {
//     tabMenuItem.addEventListener("click", function () {
//       // 모든 .tabcon 요소를 숨기고 클래스 "on"을 제거합니다.
//       tabconItems.forEach(function (tabconItem) {
//         tabconItem.style.display = "none";
//         tabconItem.classList.remove("on");
//       });

//       // 선택된 탭 내용을 보이게 하고 클래스 "on"을 추가합니다.
//       tabconItems[idx].style.display = "block";
//       tabconItems[idx].classList.add("on");

//       // 모든 li 요소의 클래스 "on"을 제거하고, 현재 선택된 li에 클래스 "on"을 추가합니다.
//       tabMenuItems.forEach(function (menuItem) {
//         menuItem.classList.remove("on");
//       });
//       tabMenuItem.classList.add("on");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const tabMenuItems = document.querySelectorAll(".tabMenu li");
  const tabconItems = document.querySelectorAll(".tabcon");

  tabMenuItems.forEach((tabMenuItem, idx) => {
    tabMenuItem.addEventListener("click", () => {
      tabconItems.forEach((tabconItem) => {
        tabconItem.style.display = "none";
        tabconItem.classList.remove("on");
      });

      tabconItems[idx].style.display = "block";
      tabconItems[idx].classList.add("on");

      tabMenuItems.forEach((menuItem) => menuItem.classList.remove("on"));
      tabMenuItem.classList.add("on");
    });
  });
});
