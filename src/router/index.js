import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

// Login Guard
router.beforeEach((to, from, next) => {
  if (to.name == "NoContent" && from.name) {
    next(from);
  }

  next();
});

export default router;
