import VueRouter from "vue-router";
import Vue from "vue";
// import About from "@/view/About.vue";
// import Home from "@/view/Home.vue";

const routes = [
  // { path: "/about", component: About },
  // { path: "/home", component: Home },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "About" */ "@/view/About.vue"),
  },
  {
    path: "/home",
    component: () => import(/* webpackChunkName: "Home" */ "@/view/Home.vue"),
  },
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

Vue.use(VueRouter);

export default router;
