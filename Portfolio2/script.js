let btn = document.querySelector(".menu-btn");
let nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("open");
});
