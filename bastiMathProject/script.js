const result = document.getElementById("result");

function randomizeResult() {
  let newResult = Math.floor(Math.random() * 30);
  result.innerHTML = newResult;
}

function checkInput() {
  let numOne = parseInt(document.getElementById("numOne").value);
  let numTwo = parseInt(document.getElementById("numTwo").value);
  let numThree = parseInt(document.getElementById("numThree").value);
  let numFour = parseInt(document.getElementById("numFour").value);
  resultCalc = numOne + numTwo + numThree + numFour;
  if (resultCalc == result.innerHTML) {
    alert("Well done Basti!");
  } else {
    alert("Have another try.");
  }
}
