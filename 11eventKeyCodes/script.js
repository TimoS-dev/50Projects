const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

window.addEventListener("keydown", (e) => {
  box1.innerText = e.key;
  box2.innerText = e.keyCode;
  box3.innerText = e.code;
  console.log(e);
});
