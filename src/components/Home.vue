<template>
  <b-container fluid id="bg1">

    <b-row class="row-1">
      <b-col class="row-1-col-1">
        <hr>
        <header>
          <h1>Sam Lesem</h1>
          <h3>Software Engineer, Data Consumer, Netflix Enthusiest</h3>
        </header>
      </b-col>
    </b-row>
    <b-row class="row-2">
      <b-col>
        <b-img src="./src/assets/IMG_6193.png" center rounded="circle" width="576px" height="384px" class="m-1" />
      </b-col>
      <b-col>
      </b-col>
    </b-row>
    <hr>
    <footer>

    </footer>

  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.row-1-col-1 {
  float: left;
  padding: 2em 4em;
  height: 500px;
  width: 100%;
  background: linear-gradient(to bottom right, #77c9d4, #015249);
  color: white;
}

hr {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
}

.row-2 {
  margin-top: 100px;
  margin-bottom: 100px;
}

#bg1 {
  font-family: "Open Sans", sans-serif;
}
</style>

