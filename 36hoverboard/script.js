let box = document.getElementById("box");
let colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

function randomizer() {
  return Math.floor(Math.random() * 5);
}

function boardBuilding(amount) {
  for (i = 1; i <= amount; i++) {
    let hoverbox = document.createElement("div");
    hoverbox.className += "hoverbox";

    hoverbox.addEventListener("mouseover", function (e) {
      let counter = randomizer();
      hoverbox.style.backgroundColor = colors[counter];
      hoverbox.classList.add("active");
      console.log(hoverbox.classList);
    });

    hoverbox.addEventListener("mouseout", function () {
      hoverbox.classList.remove("active");
      hoverbox.style.backgroundColor = "grey";
      console.log(hoverbox.classList);
    });
    box.appendChild(hoverbox);
  }
}

boardBuilding(104);
