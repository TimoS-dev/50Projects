const result = document.getElementById("result");
const input = document.getElementById("filter");
const listItems = [];

let test = {};
let picCounter = [];
let nameCounter = [];
let countryCounter = [];

function show1() {
  console.log(test[0]);

  for (let i = 0; i < 50; i++) {
    picCounter.push(test[i].picture.large);
    nameCounter.push(test[i].name.first);
    countryCounter.push(test[i].location.country);
  }
  console.log(picCounter);
  console.log(nameCounter);
  console.log(countryCounter);
}

getData();

function filtering() {
  test.filtering(() => {});
}

function show() {
  console.log(test[0], test[1]);
  createXUsers(50);
}

function createXUsers(amount) {
  for (let i = 0; i < amount; i++) {
    createUser(
      test[i].picture.large,
      test[i].name.first,
      test[i].location.country
    );
    console.log("done creating");
  }
}

async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=50");
  const data = await res.json();
  test = await data.results;

  result.innerText = "";

  /*   const newData = data.results.filter((user) => {
    user.name.first.includes("i");
  });
  console.log(newData); */

  /* console.log(
    data.results.forEach((x) => console.log(x.name.first.includes("a")))
  ); */

  /*   newData..results.forEach((user) => {
    console.log(user);
    createUser(user.picture.medium, user.name.first, user.location.country);
  }); */
}

function createUser(picture, name, country) {
  let newUser = document.createElement("li");
  newUser.innerHTML = `          <img
    src="${picture}"
    alt="Sara"
  />
  <div class="user-info">
    <h4>${name}</h4>
    <p>${country}</p>
  </div>`;
  result.appendChild(newUser);
}

async function getUserList(x) {
  let list = await fetch(`https://randomuser.me/api/?results=${x}`)
    .then((res) => res.json())
    .then((data) => data);
  return list;
}

input.addEventListener("keyup", () => {
  console.log(input.value);
  let tester = input.value;
  console.log(nameCounter.filter((item) => item.includes(tester)));
});

function createUserList(x) {
  for (let i = 0; i <= x; i++) {
    createUser();
  }
}

function createLoading() {
  let newUser = document.createElement("li");
  newUser.innerHTML = `<h3>Loading...</h3>`;
  list.appendChild(newUser);
}

async function fetchingUsers(id) {
  let res = await fetch(`https://randomuser.me/api/`);
  let data = await res.json();
  let search = data.results[0].email;
  console.log(search);
}
