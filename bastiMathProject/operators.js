function randomizeOperators(x) {
  let newOperatorNumber = Math.floor(Math.random() * 4);
  if (newOperatorNumber == 0) {
    document.getElementById(`${x}`).innerHTML = "+";
  } else if (newOperatorNumber == 1) {
    document.getElementById(`${x}`).innerHTML = "-";
  } else if (newOperatorNumber == 2) {
    document.getElementById(`${x}`).innerHTML = "*";
  } else if (newOperatorNumber == 3) {
    document.getElementById(`${x}`).innerHTML = "/";
  }
}

function randomizeAllOperators() {
  randomizeOperators("keyOne");
  randomizeOperators("keyTwo");
  randomizeOperators("keyThree");
}

function randomizeResult() {
  let newResult = Math.floor(Math.random() * 30);
  result.innerHTML = newResult;
}
