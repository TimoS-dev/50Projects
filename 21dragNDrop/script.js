let fill = document.querySelector(".fill");
let empties = document.querySelectorAll(".empty");

function dragStart() {
  this.className += " hold";
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}
function dragEnd() {
  this.className = "fill";
  console.log("hey");
}
function dragOver(e) {
  console.log("over");
  e.preventDefault();
  /*   empty.style.background = "rgb(" + 51 + "," + 51 + "," + 51 + ")";
  empty.style.border = "dotted 2px white"; */
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}
function dragLeave() {
  this.className = "empty";
}
function dragDrop(e) {
  e.preventDefault();
  this.className = "empty";
  this.append(fill);
}

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
fill.addEventListener("dragover", dragOver);

for (let empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}
