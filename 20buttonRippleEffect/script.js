let btn = document.querySelectorAll(".ripple");

btn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    let buttonTop = event.target.offsetTop;
    let buttonLeft = event.target.offsetLeft;
    let positionX = x - buttonLeft;
    let positionY = y - buttonTop;

    let circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = positionY + "px";
    circle.style.left = positionX + "px";
    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
