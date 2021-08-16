const sounds = document.querySelectorAll("audio");

const soundsArr = Array.from(sounds);
console.log(soundsArr[0]);
const newSoundArr = soundsArr.map((s) => s.id);

console.log(newSoundArr);

newSoundArr.forEach((x) => {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerHTML = x;
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(x).play();
  });
  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  newSoundArr.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
