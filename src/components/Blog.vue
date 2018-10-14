<template>
  <div>
    <b-row class="justify-content-lg-center justify-content-md-center justify-content-sm-center">
      <b-col cols="2" id="sidenav">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </b-col>
      <b-col cols="10" id="content">
        <b-row class="text-center justify-content-lg-center justify-content-md-center justify-content-sm-center">
          <b-col cols="12" md="auto">
            <h1>Data Visualizations by Me</h1>
            <h6>Step into my office</h6>
            content
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import config from "../js/config.js";

export default {
  name: "Blog",
  data() {
    return {
      sam: "the man"
    };
  }
};
//class="bd-sidebar"
//class="bd-content"
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
  border-left: thick solid black;
}
</style>
