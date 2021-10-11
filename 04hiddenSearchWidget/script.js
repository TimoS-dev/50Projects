let btn = document.querySelector(".button");
let input = document.querySelector(".input");

btn.addEventListener("click", function () {
  input.classList.toggle("active");
  btn.classList.toggle("active");
});
