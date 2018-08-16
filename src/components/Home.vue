<template>
  <b-container fluid id="bg1">
    <b-row>
      <header>
        <h1>Sam Lesem</h1>
        <h3>Software Engineer, UnitedHealth Group</h3>
      </header>
    </b-row>
    <b-row align-v="center" class="row-2">
      <b-col>
        <b-img src="./src/assets/IMG_6193.png" center rounded="circle" width="576px" height="384px" class="m-1" />
      </b-col>

      <b-col>
      </b-col>
    </b-row>
    <footer>
      GitHub
    </footer>

  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  float: left;
  padding: 2em 4em;
  height: 500px;
  width: 100%;
  background: linear-gradient(to bottom right, #77c9d4, #015249);
  color: white;
}

.row-2 {
  margin-top: 100px;
}

#bg1 {
  font-family: "Open Sans", sans-serif;
}

footer {
  float: left;
}
</style>

