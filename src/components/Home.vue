<template>
  <div>
    <b-row>
      <b-col cols="12" class="welcome-splash">
        <header>
          <h1>Sam Lesem</h1>
          <h3>Software Engineer, Data Consumer, Netflix Enthusiast</h3>
        </header>
      </b-col>
    </b-row>
    <b-row class="about-me">
      <b-col cols="12" md="6" class="my-image">
        <b-img src="./media/IMG_6193.png" width="576px" height="384px" class="img-fluid prof-pic p-2" />
      </b-col>
      <b-col cols="12" md="6">
        <h6> Who are you? </h6>
        <p>Hi, My name is Sam Lesem and I am a Software Engineer at Optum. I am a Wake Forest University class of 2016 graduate with a degree in Computer Science and a minor in Mathematics.</p>
        <br>
        <h6> What do you do? </h6>
        <p> I am a software engineer for OptumRx. I am currently driving a large scale effort rebuilding our web portal for our specialty pharmacy, BriovaRx. I am developing and establishing best practices involving Angular 7, Public Cloud, Containerization, DevOps pipelines, and web service integration. Previously, I have created proof of concepts and led innovative teams combining medical adherence use cases with mobile, web, and virtual assistant applications. </p>
        <br>
        <h6> Do you have any interests or hobbies? </h6>
        <p> I have a lot of interests! Sports, Exercise, Aviation, Weather, Data, the list goes on... </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="text-left my-experience p-0">
        <h6 class="text-center my-experience-header"> My Experience...</h6>
        <b-col>
          <p>
            <strong>Associate Software Engineer,
              <a href="https://www.optum.com/" target="_blank">Optum - UnitedHealth Group</a>,
            </strong>
            January 2018 - Present, Schaumburg, IL
          </p>
        </b-col>

        <b-col>
          <p>
            <strong>Software Engineer - Technology Development Program,
              <a href="https://www.optum.com/" target="_blank">Optum - UnitedHealth Group</a>,
            </strong>
            January 2017 - January 2018, Schaumburg, IL
          </p>
        </b-col>

        <b-col>
          <p>
            <strong>
              Software Quality Assurance Intern,
              <a href="https://www.wigwag.io/" target="_blank">WigWag Inc (acquired by Arm)</a>,
            </strong>
            Summer 2016, Austin, TX
          </p>
        </b-col>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="text-center download-resume">
        <a href="./media/SamLesemResumeWebsite.pdf" download="SamLesemResume">
          Download Resume
        </a>
      </b-col>
    </b-row>

    <!-- <b-row class="text-center resume-row">
      <b-col cols="12" class="resume-col">
        <iframe class="resume" src="https://drive.google.com/file/d/0B0n91EquXz9qSFZrN1R3aVJyX0k/preview" width="580px" height="480px">
        </iframe>
      </b-col>
    </b-row> -->
    <b-row class="text-center">
      <b-col cols="12">
        <p>
          Made with VueJS, ES6, ExpressJS, and hosted on Heroku
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
  components: {}
};
</script>

<style scoped>
.welcome-splash {
  text-align: center;
  height: 500px;
  width: 100%;
  background: linear-gradient(to bottom right, #77c9d4, #015249);
  color: white;
}

header {
  margin-top: 200px;
  margin-bottom: 100px;
}

hr {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
}

.about-me {
  margin-top: 35px;
  margin-bottom: 35px;
  font-family: "Cardo", sans-serif;
}

.my-image {
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  padding-bottom: 35px;
}

.prof-pic {
  max-width: 100%;
  height: auto;
  border-radius: 25px;
  margin: auto;
}

h6 {
  font-weight: bold;
  font-size: 16pt;
}

.resume-row {
  margin-top: 25px;
  margin-bottom: 50px;
}

.resume-col {
  border-color: #77c9d4;
}

.resume {
  max-width: 100%;
}

.my-experience a {
  color: black;
}

.my-experience a:hover {
  color: #333333;
}

.my-experience-header {
  margin-bottom: 32px;
}

.download-resume {
  margin-bottom: 16px;
}
</style>

