import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductPage from '../views/ProductView.vue';
import AboutView from '../views/AboutView.vue';
import RoomBookingPage from '../views/RoomBookingPage.vue';
import SignInPage from '../views/SignInPage.vue';
import SignUpPageVue from '@/views/SignUpPage.vue';
import ProfileView from '@/views/ProfileView.vue';
import NotFoundPage from '@/views/404Page.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/product', component: ProductPage },
  { path: '/about', component: AboutView },
  { path: '/login', component: SignInPage },
  { path: '/logout', component: SignInPage },
  { path: '/room-booking', component: RoomBookingPage },
  { path: '/signup', name:'Signup', component: SignUpPageVue },
  { path: '/profile', component: ProfileView, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;

