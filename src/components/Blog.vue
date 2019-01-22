<template>
  <div>
    <b-row class="justify-content-center">
      <b-col cols="12" id="content">
        <b-row class="justify-content-center">
          <b-col cols="12" md="auto">
            <h1>Data Visualizations</h1>
          </b-col>
        </b-row>
        <hr>
        <b-row class="rl-header justify-content-center">
          <h4>Chicago Red Light Violations</h4>
        </b-row>
        <b-row class="text-center justify-content-center">
          <div id="map"></div>
        </b-row>
        <b-row class="rl-source">
          <p>Source:
            <a href="https://data.cityofchicago.org/Transportation/Red-Light-Camera-Violations/spqx-js37">City of Chicago</a>
          </p>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import chicagoredlights from "../js/mapbox/chicagoredlights";

export default {
  name: "Blog",
  data() {
    return {
      greeting: ""
    };
  },
  methods: {
    mapbox: function() {
      chicagoredlights.mapbox();
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

a {
  display: block;
}

#content {
  margin-top: 50px;
}

#map {
  margin: auto;
  position: absolute;
  width: 600px;
  max-width: 100%;
  height: 400px;
  text-align: justify;
}
.rl-source {
  padding-top: 425px;
  margin: auto;
}
</style>
