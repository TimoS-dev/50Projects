const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle"); // querySelectorAll brings in a node list = array

let currentActive = 1;

// function: active 1-2 setze progress auf25%, mach ne transition left to right

let test = "";

next.addEventListener("click", function () {
  currentActive++;
  if(currentActive >= circles.length) {
    next.disabled = true
  }
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  if (currentActive > 1) {
    prev.disabled = false
  }
  update();
});

prev.addEventListener("click", function () {
  currentActive--;
  console.log(currentActive);
  if (currentActive <= 1) {
    prev.disabled = true
  }
  if (currentActive < 1) {
    currentActive = 1;
  }
  if (currentActive < 4) {
    next.disabled = false
  }
  update()
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active")
  progress.style.width = (((actives.length -1) / (circles.length -1))*100 ) + "%";
}
