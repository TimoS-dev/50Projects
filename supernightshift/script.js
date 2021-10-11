let navTog = document.querySelector(".nav-toggle");
let arrow = document.querySelector(".arrow");
let navLinks = document.querySelectorAll(".nav__link");

navTog.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  arrow.classList.toggle("fa-rotate-180");
  arrow.classList.toggle("red");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    arrow.classList.toggle("fa-rotate-180");
    arrow.classList.toggle("red");
  });
});
