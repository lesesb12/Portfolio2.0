<template>
  <div>
    <b-row id="row-1">
      <b-col id="r1c1">
        <hr>
        <header>
          <h1>Sam Lesem</h1>
          <h3>Software Engineer, Data Consumer, Netflix Enthusiest</h3>
        </header>
      </b-col>
    </b-row>
    <b-row id="row-2">
      <b-col>
        <b-img src="./src/assets/IMG_6193.png" center rounded="circle" width="576px" height="384px" class="m-1" />
      </b-col>
      <b-col>
        <h6> Who are you? </h6>
        <p>Hi, My name is Sam Lesem and I am a Software Engineer at Optum. I am a Wake Forest University class of 2016 graduate with a degree in Computer Science and a minor in Mathematics.</p>
        <br>
        <h6> What do you do? </h6>
        <p> I am a team lead and software engineer for an Innovation, Research, and Development team within OptumRx. I establish team sprint goals, gather requirements from business partners, ideate and build innovative features across prototype Voice, Mobile, and Web applications. </p>
        <br>
        <h6> Do you have any interests or hobbies? </h6>
        <p> I have a lot of interests! Sports, Exercise, Aviation, Weather, Data, the list goes on... </p>
      </b-col>
    </b-row>
    <b-row id="row-3" class="text-center">
      <b-col id="r3c1">
        <iframe id="resume" src="https://drive.google.com/file/d/0B0n91EquXz9qSFZrN1R3aVJyX0k/preview" width="580px" height="480px">
        </iframe>
      </b-col>
    </b-row>
    <!--<b-row>
      <p>
        Made by VueJS, ES6, and hosted on Heroku
      </p>
    </b-row>-->
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
  //     return require("./src/assets/IMG_6193.png");
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

h6 {
  font-weight: bold;
  font-size: 16pt;
}
#r3c1 {
  margin-top: 100px;
  margin-bottom: 50px;
  border-color: #77c9d4;
}
</style>

