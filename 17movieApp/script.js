let API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2cd9f2073d252bd38dbb57167fd77165&page=1";
let IMG_PATH = "https://image.tmdb.org/t/p/w1280";
let SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=2cd9f2073d252bd38dbb57167fd77165&query=`;
let test = document.querySelector(".movie");
let container = document.querySelector(".container");
let input = document.querySelector(".search");

input.addEventListener("keyup", (input) => {
  let url = SEARCH_URL + `${input.target.value}`;
  console.log(input.target.value);
  console.log(url);
  if (input.target.value == 0) {
    getInfo(API_URL);
  }
  getInfo(url);
});

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  return await data.results;
}

async function getInfo(URL) {
  container.innerHTML = "";
  let data = await getMovies(URL);
  data.forEach((element) => {
    let ratingElement = document.querySelector(".rating");
    let image = IMG_PATH + element.poster_path;
    let title = element.title;
    let rating = element.vote_average;
    let ratingColor = "white";
    if (rating % 2 == 0) {
      rating = rating + ".0";
    }
    if (rating < 5) {
      ratingColor = "red";
    }
    if (rating >= 5) {
      ratingColor = "orange";
    }
    if (rating >= 8) {
      ratingColor = "green";
    }

    let overview = element.overview;
    createContent(image, title, rating, overview, ratingColor);
  });
}

getInfo(API_URL);

async function createContent(image, title, rating, text, color) {
  let element = document.createElement("div");
  element.classList.add("movie");
  element.innerHTML = `<img src="${image}" class="movieImage">
  <div class="subContainer">
    <div class="title">${title}</div>
    <div class="rating" style="color: ${color}">${rating}</div>
  </div>
  <div class="hoverContainer">
    <p>Overview</p>
    <p class="description">
      ${text}
    </p>
  </div>`;
  container.appendChild(element);
}
