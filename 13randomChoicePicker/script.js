const textArea = document.getElementById("textarea");
const tagsEl = document.getElementById("tags");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTag(e.target.value);

  if (e.key == "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTag(input) {
  let newArray = input.split(",");
  tagsEl.innerHTML = "";
  newArray.forEach((e) => {
    let newEl = document.createElement("span");
    newEl.classList.add("tag");
    newEl.innerText = e;
    tagsEl.appendChild(newEl);
  });
}

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    removeHighlight();
    highlight(randomTag);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      removeHighlight();
      highlight(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add("highlight");
}

function removeHighlight() {
  const tags = document.querySelectorAll(".tag");
  tags.forEach((e) => {
    e.classList.remove("highlight");
  });
}
