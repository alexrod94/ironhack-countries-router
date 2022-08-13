import { createRouter, createWebHistory } from "vue-router";
import CountriesList from "../components/CountriesList.vue";
import CountryDetails from "../components/CountryDetails.vue";

const routes = [
  {
    path: "/",
    name: "CountriesList",
    component: CountriesList,
    children: [
      {
        path: "/country/:id",
        name: "CountryDetails",
        component: CountryDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
