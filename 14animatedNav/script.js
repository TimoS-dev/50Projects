let btn = document.querySelector(".menu-btn");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  ul.classList.toggle("close");
});
