/* let geoJSONHamburgBikes =
  "https://geodienste.hamburg.de/HH_WFS_Harazaen?service=WFS&request=GetFeature&version=2.0.0&typename=de.hh.up:zaehlstellen_daten&outputFormat=application%2Fgeo%2Bjson&srsName=EPSG%3A4326";

let urlParams = parseURLParams(geoJSONHamburgBikes);

console.log(urlParams); */
const Http = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText);
};
