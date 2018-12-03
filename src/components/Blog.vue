<template>
  <div>
    <b-row class="justify-content-center">
      <!-- <b-col cols="2" id="sidenav">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </b-col> -->
      <b-col cols="12" id="content">
        <b-row class="text-center justify-content-center">
          <b-col cols="12" md="auto">
            <h1>Data Visualizations</h1>
          </b-col>
        </b-row>
        <b-row class="text-center justify-content-center">
          <div id="map">
          </div>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
let chicagorl = require("../js/mapbox/chicagoredlights.js");

export default {
  name: "Blog",
  data() {
    return {};
  },
  methods: {
    mapbox: function() {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoic2xlc2VtIiwiYSI6ImNqM2xzZnpobjAweTkzM215dTIxMXpia2gifQ.0u7LU9cCdGoIGQH829c44A";
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v10",
        center: [-87.6244, 41.8756],
        zoom: 9
      });

      map.addControl(new mapboxgl.NavigationControl());

      map.on("load", function() {
        map.addLayer({
          id: "violations",
          type: "circle",
          source: {
            type: "geojson",
            data: "https://data.cityofchicago.org/resource/twfh-866z.geojson"
          },
          paint: {
            "circle-color": "red",
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["zoom"],
              2,
              ["*", 0.25, ["to-number", ["get", "violations"]]],
              5,
              ["*", 1 / 3, ["to-number", ["get", "violations"]]],
              10,
              ["*", 0.5, ["to-number", ["get", "violations"]]]
            ],
            "circle-opacity": 0.5
          }
        });
      });
    }
  },
  mounted() {
    this.mapbox();
  }
};
</script>

<style scoped>
div {
  margin-top: 20px;
}

#sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px;
}

a {
  display: block;
}

#content {
  margin-top: 50px;
}

#map {
  position: absolute;
  width: 600px;
  height: 400px;
  text-align: justify;
}
</style>
