const result = document.getElementById("result");
let resultCheck = 0;

let operators = {
  "+": function (a, b) {
    return a + b;
  },
  "-": function (a, b) {
    return a - b;
  },
  "*": function (a, b) {
    return a * b;
  },
  "/": function (a, b) {
    return a / b;
  },
};

function randomizeOperators(x) {
  let newOperatorNumber = Math.floor(Math.random() * 4);
  console.log(newOperatorNumber);
  if (newOperatorNumber == 0) {
    document.getElementById(`${x}`).innerHTML = "+";
  } else if (newOperatorNumber == 1) {
    document.getElementById(`${x}`).innerHTML = "-";
  } else if (newOperatorNumber == 2) {
    document.getElementById(`${x}`).innerHTML = "*";
  } else if (newOperatorNumber == 3) {
    document.getElementById(`${x}`).innerHTML = "/";
  }
  console.log(document.getElementById(`${x}`).innerHTML);
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

function calculating() {
  let keyOne = document.getElementById("keyOne").innerHTML;
  let keyTwo = document.getElementById("keyTwo").innerHTML;
  let keyThree = document.getElementById("keyThree").innerHTML;
  let numOne = parseInt(document.getElementById("numOne").value);
  let numTwo = parseInt(document.getElementById("numTwo").value);
  let numThree = parseInt(document.getElementById("numThree").value);
  let numFour = parseInt(document.getElementById("numFour").value);
  let firstResult = operators[keyOne](numOne, numTwo);
  let secondResult = operators[keyTwo](firstResult, numThree);
  let thirdresult = operators[keyThree](secondResult, numFour);
  resultCheck = thirdresult;
  checkResult();
}

function checkResult() {
  if (resultCheck == result.innerHTML) {
    alert("Correct!");
  } else {
    alert("Try again!");
  }
}
