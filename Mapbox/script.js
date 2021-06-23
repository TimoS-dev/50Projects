mapboxgl.accessToken =
  "pk.eyJ1IjoidGltbzEyMzQ1NiIsImEiOiJja3BucTBvejQwdTJtMm9xcTd2NGh1ZDBoIn0.R5KnzS5KnfheaB1tnqyP6w";

 
    let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [9.97, 53.57],
    zoom: 15,
  });
  
//adding a marker
  var marker1 = new mapboxgl.Marker({ color: 'black', rotation: 0 })
  .setLngLat([9.97, 53.57],)
  .addTo(map);
   

  //adding navigation controls
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);
  


function zoomin() {
  alert("Zooming in!");
}
function zoomout() {
  alert("Zooming out!");
}