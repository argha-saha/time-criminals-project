import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Aircraft from "@/views/Aircraft.vue";
import TechnicalDocuments from "@/views/TechnicalDocuments.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/aircraft",
    name: "Aircraft",
    component: Aircraft,
  },
  {
    path: "/technicaldocuments",
    name: "Technical Documents",
    component: TechnicalDocuments,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = `Time Criminals | ${ to.name }`;
  next();
});

export default router;