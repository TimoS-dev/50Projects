const container = document.getElementById("container");
const btn = document.getElementById("button");
const count = 16;

btn.addEventListener("click", () => {
  test(count);
});

function createRandomNum() {
  let number = 0;
  number = Math.floor(Math.random() * 10 + 300);
  return number;
}

function createImgNum() {
  return `${createRandomNum()}x${createRandomNum()}`;
}

console.log(createImgNum());

function test(count) {
  for (let i = 1; i <= count; i++) {
    let item = document.createElement("img");
    item.src = `https://source.unsplash.com/random/${createImgNum()}`;
    container.appendChild(item);
    console.log("working");
  }
}
