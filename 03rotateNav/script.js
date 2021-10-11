let container = document.querySelector(".container");
let open = document.getElementById("open");
let close = document.getElementById("close");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
});
close.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
