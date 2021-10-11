window.onload = test;
let twitter = document.querySelector(".twitter");
let youtube = document.querySelector(".youtube");
let facebook = document.querySelector(".facebook");

let twitterNum = 12000;
let youTubeNum = 5000;
let facebookNum = 7500;

function test() {
  mathematik(twitterNum, youTubeNum, facebookNum);
}

async function mathematik(twitterNum, youTubeNum, facebookNum) {
  for (let i = 0; i <= twitterNum; i += 50) {
    twitter.innerText = i;
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
  for (let i = 0; i <= youTubeNum; i += 5) {
    youtube.innerText = i;
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
  for (let i = 0; i <= facebookNum; i += 5) {
    facebook.innerText = i;
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}
