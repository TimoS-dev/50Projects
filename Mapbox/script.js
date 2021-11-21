/* import hhTrafficLights from "../../IntersectionMatcher/intersection_matcher/src/data/HH_WFS_Lichtanlagen.js";
 */
mapboxgl.accessToken =
  "pk.eyJ1IjoidGltbzEyMzQ1NiIsImEiOiJja3BucTBvejQwdTJtMm9xcTd2NGh1ZDBoIn0.R5KnzS5KnfheaB1tnqyP6w";

const hideBtn = document.getElementById("hideBtn");
const submitBtn = document.getElementById("submitBtn");
const btnContainer = document.getElementById("container");
const mapContainer = document.getElementById("map");
const bodyContainer = document.body;
let selectionArray = [];

//changes window to/from EDIT MODE
hideBtn.addEventListener("click", () => {
  btnContainer.classList.toggle("hiding");
  bodyContainer.classList.toggle("opacity");
  mapContainer.classList.toggle("border");
  if (hideBtn.innerText == "EDIT MODE OFF") {
    hideBtn.innerText = "EDIT MODE IS RUNNING";
  } else {
    hideBtn.innerText = "EDIT MODE OFF";
  }
});

//selectBtn function
submitBtn.addEventListener("click", () => {
  alert(JSON.stringify(selectionArray));
});

//initiation of map
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [9.9850733, 53.5832155],
  zoom: 14,
});

map.addControl(new mapboxgl.NavigationControl());

//gives value back
input.addEventListener("keyup", (e) => {
  console.log(e.target);
});

async function getIntersectionContent(atProcessingStep) {
  let inputValue = document.getElementById("input").value;
  jumpToPosition(inputValue);
  const rawResponse = await fetch("http://localhost:3000/getIntersection", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intersectionId: inputValue,
      atStepOfProcessing: atProcessingStep,
    }),
  });
  const content = await rawResponse.json();

  const featureCollectionObj = objectCreation(content);

  console.log(featureCollectionObj);
  updateDataSet(featureCollectionObj, "route");
}

function jumpToPosition(intersectionID) {
  //get position from HH_WFS_Lichtanlagen.js; position that is jumped to is hard coded for now
  //should be another fetch request to a database to allow for quick action? -->Kevin
  map.flyTo({
    center: [9.985438, 53.582918],
  });
}

function objectCreation(listOfStreets) {
  return { type: "FeatureCollection", features: listOfStreets };
}

//showing lines on the map
function updateDataSet(featureCollection, source) {
  map.getSource(source).setData(featureCollection);
}

function initAddLayer() {
  map.addSource("route", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [],
    },
  });
  map.addSource("selection", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [],
    },
  });
  map.addLayer({
    id: "route",
    type: "line",
    source: "route",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#888",
      "line-width": 6,
    },
  });
  map.addLayer({
    id: "selection",
    type: "line",
    source: "selection",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#529",
      "line-width": 8,
    },
  });
  map.on("click", (e) => {
    const bbox = [
      [e.point.x - 5, e.point.y - 5],
      [e.point.x + 5, e.point.y + 5],
    ];
    const selectedFeatures = map.queryRenderedFeatures(bbox, {
      layers: ["route"],
    });
    if (
      selectionArray.filter(
        (e) => e.properties.osmWayId == selectedFeatures[0].properties.osmWayId
      ).length == 1
    ) {
      selectionArray = selectionArray.filter((e) => {
        console.log(e.properties.osmWayId);
        console.log(selectedFeatures[0].properties.osmWayId);
        return (
          e.properties.osmWayId !== selectedFeatures[0].properties.osmWayId
        );
      });
      console.log(selectionArray);
    } else if (
      selectionArray.filter(
        (e) => e.properties.osmWayId == selectedFeatures[0].properties.osmWayId
      ).length == 0
    ) {
      console.log(selectedFeatures[0].properties.osmWayId);
      selectionArray.push(selectedFeatures[0]);
    }
    console.log(selectionArray);
    selectionFeatureCollection = objectCreation(selectionArray);
    updateDataSet(selectionFeatureCollection, "selection");
  });
}
setTimeout(initAddLayer, 100);

//syntax for updating intersection; keine featurecollection, sondern Liste an features zurückschicken
//POST-Befehl an /updateIntersection
/* {
  "intersectionId": 114,
"features": [
  {
      "type":"Feature",
    ...
  },
  ...
]
} */
