export default [{
    name: "home",
    path: "/",
    component: require('../components/Home.vue').default
  },
  {
    name: "blog",
    path: "/blog",
    component: require('../components/Blog.vue').default
  },
  {
    name: "test",
    path: "/test",
    component: require('../components/Test.vue').default
  }
]