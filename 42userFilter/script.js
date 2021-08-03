const input = document.getElementById("filter");
const list = document.getElementById("result");

input.addEventListener("keyup", () => {
  console.log(input.value);
  createUser();
  fetchingUsers("email");
});

function createUser() {
  let newUser = document.createElement("li");
  newUser.innerHTML = `          <img
    src="https://randomuser.me/api/portraits/women/33.jpg"
    alt="Sara"
  />
  <div class="user-info">
    <h4>Sara Smith</h4>
    <p>Germany</p>
  </div>`;
  list.appendChild(newUser);
}

async function fetchingUsers(id) {
  let res = await fetch(`https://randomuser.me/api/`);
  let data = await res.json();
  let search = data.results[0].`${id}`;
  console.log(search);
}
