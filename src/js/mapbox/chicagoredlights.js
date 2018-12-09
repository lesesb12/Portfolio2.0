import mapboxgl from "mapbox-gl";

let chicago_key = "";
let currentdate = new Date();

let today = "&violation_date=" + currentdate.getFullYear() + "-" +
  (currentdate.getMonth() + 1) + "-" +
  currentdate.getDate() - 14 + "T00:00:00.0000";

if (process.env.CHICAGO_API) {
  chicago_key = `?$$app_token=${process.env.CHICAGO_API}`;
}

export default ({

  mapbox: function () {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2xlc2VtIiwiYSI6ImNqM2xzZnpobjAweTkzM215dTIxMXpia2gifQ.0u7LU9cCdGoIGQH829c44A";
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v10",
      center: [-87.6244, 41.8756],
      zoom: 9
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", function () {
      map.addLayer({
        id: "violations",
        type: "circle",
        source: {
          type: "geojson",
          data: `https://data.cityofchicago.org/resource/twfh-866z.geojson${chicago_key}`
        },
        paint: {
          "circle-color": "red",
          "circle-radius": [
            "interpolate", ["linear"],
            ["zoom"],
            2, ["*", 0.25, ["to-number", ["get", "violations"]]],
            5, ["*", 1 / 3, ["to-number", ["get", "violations"]]],
            10, ["*", 0.5, ["to-number", ["get", "violations"]]]
          ],
          "circle-opacity": 0.5
        }
      });
    });
  }

})