const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";

function draw(radius, positionX, positionY) {
  ctx.beginPath();
  var x = positionX; // x coordinate
  var y = positionY; // y coordinate
  var radiusSize = radius; // Arc radius
  var startAngle = 0; // Starting point on circle
  var endAngle = 2 * Math.PI; // End point on circle
  var counterclockwise = true; // clockwise or counterclockwise

  ctx.arc(x, y, radiusSize, startAngle, endAngle, counterclockwise);

  ctx.fill();
}

canvas.addEventListener("mousemove", (e) => {
  positionX = e.pageX;
  positionY = e.pageY;
  draw(10, positionX, positionY);
});
