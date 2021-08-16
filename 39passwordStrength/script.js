let btn = document.getElementById("button");
let pw = document.getElementById("password");
let bg = document.getElementById("background");

window.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

pw.addEventListener("keyup", function () {
  let bluring = 0;
  if (pw.value.length < 10) {
    bluring = pw.value.length;
  } else {
    bluring = 10;
  }
  bg.style.filter = `blur(${10 - bluring}px)`;
});
