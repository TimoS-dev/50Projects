const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.height = window.innerHeight;
ctx.canvas.width = window.innerWidth;

let lastStrokeX = 0;
let lastStrokeY = 0;

document.body.addEventListener("mousedown", () => {
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  if (lastStrokeX == 0) {
    lastStrokeX = mouseX;
    lastStrokeY = mouseY;
  }
  let startX = window.innerWidth / 2;
  let startY = window.innerHeight / 2;
  ctx.beginPath();
  ctx.moveTo(lastStrokeX, lastStrokeY);
  ctx.arc(lastStrokeX, lastStrokeY, false ? 5 : 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = true ? "red" : "red";
  ctx.lineTo(mouseX, mouseY);
  lastStrokeX = mouseX;
  lastStrokeY = mouseY;
  ctx.stroke();
});
