let btn = document.querySelectorAll(".faq-toggle");

btn.forEach(function (x) {
  x.addEventListener("click", () => {
    x.parentNode.classList.toggle("active");
  });
});
