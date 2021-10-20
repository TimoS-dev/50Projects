let btn = document.querySelectorAll(".box");

btn.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.classList.add("hold");
    console.log("hi");
  });
  button.addEventListener("mouseup", () => {
    button.classList.remove("hold");
  });
});
