import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import PageContainer from '../components/PageContainer.vue'
import Home from '../components/Home.vue'
import Blog from "../components/Blog.vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelope,
  faFileDownload
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faGithubSquare,
  faLinkedinIn,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faGithub, faGithubSquare, faLinkedinIn, faLinkedin, faFileDownload)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue)

import routes from "./routes.js";

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  components: {
    PageContainer,
    Home,
    Blog
  },
  template: '<PageContainer/>',
  render: h => h(PageContainer)
})