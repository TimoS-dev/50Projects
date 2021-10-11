let canvas = document.querySelector("canvas");
let btn = document.getElementById("test");
let c = canvas.getContext("2d");

let counter = 200;

btn.addEventListener("click", () => {
  let startX = Number(`${counter}`);
  c.beginPath();
  c.moveTo(200 + startX, 400);
  c.lineTo(400 + startX, 400);
  c.lineTo(400 + startX, 600);
  c.lineTo(200 + startX, 600);
  c.closePath();
  c.fill();
  counter = counter + 210;
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 110;

c.beginPath();
c.moveTo(50, 50);
c.lineTo(100, 50);
c.lineTo(100, 100);
c.lineTo(150, 100);
c.lineTo(150, 50);
c.lineTo(200, 50);
c.lineTo(200, 200);
c.lineTo(150, 200);
c.lineTo(150, 150);
c.lineTo(100, 150);
c.lineTo(100, 200);
c.lineTo(50, 200);
c.closePath();
c.fill();

c.beginPath();
c.moveTo(250, 100);
c.lineTo(300, 100);
c.lineTo(300, 200);
c.lineTo(250, 200);
c.closePath();
c.fill();

c.beginPath();
c.arc(275, 75, 20, 0, Math.PI * 2);
c.fill();
