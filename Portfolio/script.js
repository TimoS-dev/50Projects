const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

const pParagraph = document.getElementById("firstPara");
pParagraph.addEventListener("click", fetchText);

function fetchText() {
  console.log("hello!");
  fetch(
    "https://raw.githubusercontent.com/Mr124/50Projects/main/10fetchingAPI/README.md"
  )
    .then((response) => response.text())
    .then((data) => {
      pParagraph.innerHTML = data;
      console.log(data);
    });
}
