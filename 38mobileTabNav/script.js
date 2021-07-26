const ballon = document.getElementById("ballon");
const light = document.getElementById("light");
const mountain = document.getElementById("mountain");
const road = document.getElementById("road");
const home = document.getElementById("home");
const book = document.getElementById("book");
const openbook = document.getElementById("openbook");
const users = document.getElementById("users");

home.addEventListener("click", () => {
  ballon.classList.add("active");
  light.classList.remove("active");
  mountain.classList.remove("active");
  road.classList.remove("active");
});
book.addEventListener("click", () => {
  ballon.classList.remove("active");
  light.classList.add("active");
  mountain.classList.remove("active");
  road.classList.remove("active");
});
openbook.addEventListener("click", () => {
  ballon.classList.remove("active");
  light.classList.remove("active");
  mountain.classList.add("active");
  road.classList.remove("active");
});
users.addEventListener("click", () => {
  ballon.classList.remove("active");
  light.classList.remove("active");
  mountain.classList.remove("active");
  road.classList.add("active");
});
