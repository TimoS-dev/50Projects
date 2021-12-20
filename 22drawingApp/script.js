const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
let size = parseInt(document.getElementById("size").innerText);
let color = "black";
let isPressed = false;
let x;
let y;

function clearing() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function colorChange() {
  color = document.getElementById("color").value;
}
function decreasing() {
  if (size <= 5) {
    return;
  }
  document.getElementById("size").innerText = size - 5;
  size = size - 5;
}
function increasing() {
  if (size >= 40) {
    return;
  }
  document.getElementById("size").innerText = size + 5;
  size = size + 5;
}

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI, true);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidt = size * 2;
  ctx.stroke();
}

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
  drawCircle(x, y);
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});
