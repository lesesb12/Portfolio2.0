<template>
  <div>
    <b-row>
      <b-col id="sidebar">
        sidebar
      </b-col>
      <b-col id="content" cols="10">
        <h1>Data Visualizations by Me</h1>
        <h6>Step into my office</h6>
        content
      </b-col>
    </b-row>
  </div>
</template>

<script>
import config from "../js/config.js";

export default {
  name: "Blog",
  data() {
    return config;
  }
};
//class="bd-sidebar"
//class="bd-content"
</script>

<style scoped>
div {
  margin-top: 40px;
}
#content {
  border-left: thick solid black;
}
</style>
