<template>
  <div>
    <b-row id="row-1">
      <b-col cols="12" id="r1c1">
        <hr>
        <header>
          <h1>Sam Lesem</h1>
          <h3>Software Engineer, Data Consumer, Netflix Enthusiast</h3>
        </header>
      </b-col>
    </b-row>
    <b-row id="row-2">
      <b-col cols="12" md="6">
        <b-img src="./media/IMG_6193.png" width="576px" height="384px" class="img-fluid rounded profpic" />
      </b-col>
      <b-col cols="12" md="6">
        <h6> Who are you? </h6>
        <p>Hi, My name is Sam Lesem and I am a Software Engineer at Optum. I am a Wake Forest University class of 2016 graduate with a degree in Computer Science and a minor in Mathematics.</p>
        <br>
        <h6> What do you do? </h6>
        <p> I am a software engineer for OptumRx. I am currently working on rebuilding one of our websites using new technologies involving modern frontend JavaScript frameworks, containerization, and web service development. Previously, I have created and lead innovative prototypes combining medical adherence use cases with mobile, web, and virtual assistant applications. </p>
        <br>
        <h6> Do you have any interests or hobbies? </h6>
        <p> I have a lot of interests! Sports, Exercise, Aviation, Weather, Data, the list goes on... </p>
      </b-col>
    </b-row>
    <b-row id="row-3" class="text-center">
      <b-col cols="12" id="r3c1">
        <iframe class="resume" src="https://drive.google.com/file/d/0B0n91EquXz9qSFZrN1R3aVJyX0k/preview" width="580px" height="480px">
        </iframe>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col cols="12">
        <p>
          Made with VueJS, ES6, and hosted on Heroku
        </p>
      </b-col>
    </b-row>
    <hr>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  // computed: {
  //   background() {
  //     return require("../assets/IMG_6193.png");
  //   }
  // },
  components: {}
};
</script>

<style scoped>
#r1c1 {
  /*float: left;
  padding: 2em 4em;*/
  text-align: center;
  height: 500px;
  width: 100%;
  background: linear-gradient(to bottom right, #77c9d4, #015249);
  color: white;
}

header {
  margin-top: 100px;
  margin-bottom: 100px;
}

hr {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
}

#row-2 {
  margin-top: 100px;
  margin-bottom: 100px;
  font-family: "Cardo", sans-serif;
}

.profpic {
  max-width: 100%;
  height: auto;
}

h6 {
  font-weight: bold;
  font-size: 16pt;
}
#r3c1 {
  margin-top: 100px;
  margin-bottom: 50px;
  border-color: #77c9d4;
}

.resume {
  max-width: 100%;
}
</style>

