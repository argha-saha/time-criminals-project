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
    name: "TechnicalDocuments",
    component: TechnicalDocuments,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;