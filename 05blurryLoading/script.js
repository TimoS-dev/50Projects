let img = document.querySelector(".bg");
let text = document.querySelector(".loading");

window.onload = blurring();

function blur(x) {
  img.style.filter = `blur(${x}px)`;
}

async function blurring() {
  let time = 100;
  for (let i = 0; i <= time; i++) {
    let calc = time / i;
    await sleep(40);
    blur(calc);
    text.innerText = `${i}%`;
  }
  blur(0);
}

function sleep(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec));
}
