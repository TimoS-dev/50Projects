const container = document.getElementById("cardContainer");
const btn = document.getElementById("newCard");
const picture = document.getElementById("picContainer");
const image = document.getElementById("picImg");

async function newCard() {
  const config = { headers: { Accept: "application/json" } };
  const res = await fetch(
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician",
    config
  );
  const data = await res.json();
  container.innerHTML = data.data[0].name;
  image.src = data.data[0].card_images[0].image_url;
  console.log(data.data[0]);
  console.log(data.data[0].card_images[0].image_url);
}
