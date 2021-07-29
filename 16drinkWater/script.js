const cups = document.querySelectorAll(".smallCup");

updateBigCup();

cups.forEach((e) => {
  e.addEventListener("click", (e) => {
    let counter = parseInt(e.target.id);
    for (let i = 1; i <= counter; i++) {
      let cup = document.getElementById(`${i}`);
      cup.classList.add("active");
    }
    console.log(parseInt(e.target.id));
    updateBigCup();
  });
});

function updateBigCup(id) {
  const fullCups = document.querySelectorAll(".smallCup.active").length;
  const totalCups = document.querySelectorAll(".smallCup").length;
  const percentage = document.getElementById("percentage");
  const liters = document.getElementById("liters");
  const remained = document.getElementById("remained");

  liters.innerText = `${2 - (fullCups / totalCups) * 2} L`;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
    percentage.style = "";
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 400}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100} %`;
  }

  if (fullCups == totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  }
}
