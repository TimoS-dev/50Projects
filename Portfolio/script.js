const nav = document.querySelector(".nav");
const firstPara = document.getElementById("firstPara");
const secondPara = document.getElementById("secondPara");
const thirdPara = document.getElementById("thirdPara");

const btn = document.getElementById("button");

btn.addEventListener("click", () => {
  baz();
});

function foo() {
  throw new Error("oops");
}

function bar() {
  foo();
}

function baz() {
  bar();
}

setInterval(intervalFunc(), 10);
function testFunc() {
  console.log("test");
}

function intervalFunc() {
  console.log("hello again");
}

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

firstPara.addEventListener("click", function () {
  fetchText("10fetchingAPI", "firstPara");
});
secondPara.addEventListener("click", function () {
  fetchText("31passwordGenerator", "secondPara");
});
thirdPara.addEventListener("click", function () {
  fetchText("7splitLandingPage", "thirdPara");
});

function fetchText(project, ele) {
  let Para = document.getElementById(`${ele}`);
  fetch(
    `https://raw.githubusercontent.com/Mr124/50Projects/main/${project}/README.md`
  )
    .then((response) => response.text())
    .then((data) => {
      Para.innerHTML = data;
      console.log(data);
    });
}
