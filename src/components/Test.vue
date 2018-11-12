<template>
  <div class="row" id="test">
    <div class="col-md-3">
      <h1>3</h1>
    </div>
    <div class="col-md-9">
      <h1>9
        <div id="map"></div>
      </h1>
    </div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "Test",
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
        center: [-87.731812, 41.952976],
        zoom: 9
      });
    }
  },
  mounted() {
    this.mapbox();
  }
};
</script>

<style>
#test {
  margin-top: 100px;
}
h1 {
  text-align: center;
}

#map {
  position: absolute;
  width: 600px;
  height: 400px;
  text-align: justify;
}
</style>

