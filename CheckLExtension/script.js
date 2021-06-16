const inputEl = document.getElementById("input-el");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const manualBtn = document.getElementById("manual-btn");

// Diese API einbinden, um an das Clipboard / Zwischenablage des Nutzers zu kommen?
// https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API

startBtn.addEventListener("click", function () {
  // starts the function that "listens" to the clipboard input
  // if(clipboard.input !== undefined) {take input and send it to CheckL}
  console.log("CheckL Extension starts!");
  alert("CheckL Extension starts!");
});

stopBtn.addEventListener("click", function () {
  // stops the function that startBtn started
  console.log("CheckL Extension stops!");
  alert("CheckL Extension stops!");
});

manualBtn.addEventListener("click", function () {
  // take input-el and send it to CheckL
  console.log(
    "Your translated text is available in your clipbaord, use it now!"
  );
  alert("Your translated text is available in your clipbaord, use it now!");
});
