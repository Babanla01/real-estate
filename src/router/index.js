import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Contactview from "../views/Contactview.vue";
import PlotList from "../views/PlotList.vue";
import RegistrationPage from "../views/RegistrationPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contactview,
  },
  {
    path: "/plots",
    name: "plots",
    component: PlotList,
  },
  {
    path: "/registration",
    name: "registration",
    component: RegistrationPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
