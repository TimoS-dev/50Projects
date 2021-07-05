const result = document.getElementById("result");
let resultCheck = 0;
let allowedNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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

function calculate(op, num1, num2) {
  let calcResult = operators[op](num1, num2);
  return calcResult;
}

function zeroPoints() {
  let keyOne = document.getElementById("keyOne").innerHTML;
  let keyTwo = document.getElementById("keyTwo").innerHTML;
  let keyThree = document.getElementById("keyThree").innerHTML;
  if (
    keyOne !== "*" &&
    keyOne !== "/" &&
    keyTwo !== "*" &&
    keyTwo !== "/" &&
    keyThree !== "*" &&
    keyThree !== "/"
  ) {
    return true;
  } else {
    return false;
  }
}

function switching() {
  let keyOne = document.getElementById("keyOne").innerHTML;
  let keyTwo = document.getElementById("keyTwo").innerHTML;
  let keyThree = document.getElementById("keyThree").innerHTML;
  let pointCounter = 0;
  switch (keyOne) {
    case "+":
      console.log("+");
      break;
    case "-":
      console.log("-");
      break;
    case "*":
      console.log("*");
      pointCounter = pointCounter + 1;
      break;
    case "/":
      console.log("/");
      pointCounter = pointCounter + 1;
      break;
  }
}

function calculating() {
  let keyOne = document.getElementById("keyOne").innerHTML;
  let keyTwo = document.getElementById("keyTwo").innerHTML;
  let keyThree = document.getElementById("keyThree").innerHTML;
  let numOne = parseInt(document.getElementById("numOne").value);
  let numTwo = parseInt(document.getElementById("numTwo").value);
  let numThree = parseInt(document.getElementById("numThree").value);
  let numFour = parseInt(document.getElementById("numFour").value);
  console.log(keyOne, keyTwo, keyThree);
  if (zeroPoints()) {
    alert("if works12");
  } else {
    alert("not working2");
  }
  /* if (keyOne !== "*" || "/" && hier weiterarbeiten keyTwo || keyThree !== "*" || "/") {
    let firstResult = operators[keyOne](numOne, numTwo);
    let secondResult = operators[keyTwo](firstResult, numThree);
    let thirdresult = operators[keyThree](secondResult, numFour);
    resultCheck = thirdresult;
  } else if (keyOne && keyTwo && keyThree == "*" || "/") {
    let firstResult = operators[keyOne](numOne, numTwo);
    let secondResult = operators[keyTwo](firstResult, numThree);
    let thirdresult = operators[keyThree](secondResult, numFour);
    resultCheck = thirdresult;
  } else if (keyOne && keyTwo ) {
    // if 1 P
  } else if () {
    // if 2 P
  } else {
    console.log("calculating() cannot find an suitable solution");
  }


  checkResult(); */
}

function checkResult() {
  if (resultCheck == result.innerHTML) {
    alert("Correct!");
  } else {
    alert("Try again!");
  }
}
