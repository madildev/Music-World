import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Player from "../components/Player.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search/:searched",
    name: "Search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/HelloWorld.vue")
  },
  {
    path: "/details/:songid",
    name: "Player",
    component: Player
      
  }
];

const router = new VueRouter({
  routes
});

export default router;
