let hour = document.querySelector(".hourNeedle");
let minute = document.querySelector(".minuteNeedle");
let second = document.querySelector(".secondNeedle");

let counter = 0;

async function fetchingText() {
  let result = await fetch(
    `http://worldtimeapi.org/api/timezone/America/Argentina/Salta`
  );
  let result1 = await result.json();
  let time = new Date(result1.unixtime * 1000);
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let hourDegree = hours * 30 - 90;
  let minuteDegree = minutes * 6 - 90;
  let secondDegree = seconds * 6 - 90;
  hour.style.transform = `rotate(${hourDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  second.style.transform = `rotate(${secondDegree}deg)`;
}

setInterval("fetchingText()", 1000);
