const toggleBtn = document.querySelector(".toggle-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("open");
});

let section1Btn = document.querySelector(".sec1-Mbtn");
let section1popUp = document.querySelector(".sec1-popup");
let section1close = document.querySelector(".close-btn");

section1Btn.addEventListener('click', function() {
  section1popUp.classList.add('switch-on')
});

section1close.addEventListener('click', function() {
  section1popUp.classList.remove('switch-on');
});