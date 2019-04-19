<template>
  <div class="container-fluid" id="home">
    <b-nav class="navbar fixed-top navbar-dark bg-dark">
      <b-navbar-nav class="mr-2 ml-2">
        <b-nav-item router-link :to="{ name: 'home' }">
          Home
        </b-nav-item>
      </b-navbar-nav>
      <!-- <b-navbar-nav class="mr-2">
        <b-nav-item router-link :to="{ path: 'blog' }">
          Blog
        </b-nav-item>
      </b-navbar-nav> -->
      <b-navbar-nav class="ml-auto mr-2">
        <b-nav-item href="https://www.linkedin.com/in/sam-lesem-a355786a/">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="mr-2">
        <b-nav-item href="https://github.com/lesesb12">
          <font-awesome-icon :icon="['fab', 'github-square']" size="2x" />
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="mr-2">
        <b-nav-item href="mailto:samuel.lesem@gmail.com?Subject=Let's connect!">
          <font-awesome-icon :icon="['fas', 'envelope']" size="2x" />
        </b-nav-item>
      </b-navbar-nav>
    </b-nav>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: "PageContainer"
};
</script>
<style>
b-container {
  font-family: "Montserrat", sans-serif;
  background: #fafafa;
}
b-nav {
  transition: top 0.3s;
}
</style>
