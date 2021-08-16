let btn = document.getElementById("button");
let list = document.getElementById("list");
let input = document.getElementById("input");

function itemFunctionality() {
  let item = document.querySelectorAll(".item");
  item.forEach((el) => {
    el.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      list.removeChild(el);
    });
  });

  item.forEach((el) => {
    el.addEventListener("click", function () {
      el.classList.add("completed");
    });
  });
}

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let newItem = document.createElement("li");
    let content = document.getElementById("input").value;
    newItem.innerText = content;
    newItem.className += "item";
    list.appendChild(newItem);
    itemFunctionality();
  }
});
