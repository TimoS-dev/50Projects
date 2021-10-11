const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeClassActive();
    panel.classList.add("active");
  });
});

function removeClassActive() {
  panels.forEach((x) => {
    x.classList.remove("active");
  });
}
