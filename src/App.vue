<template>
 <div v-if="isShopOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" style="z-index: 9999;">
    <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <div class="mt-3 text-center">
        <i class="fas fa-store fa-3x text-green-500"></i>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Good News!</h3>
        <div class="mt-2 px-7 py-3">
          <p class="text-lg text-sw-navy">Our physical store is now open with all your favorite Sweets.Come and visit us!.</p>
        </div>
        <div class="items-center px-4 py-3">
          <button @click="isShopOpen = false" class="px-4 py-2 bg-sw-pink text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-sw-navy focus:outline-none focus:ring-2 focus:ring-green-300">
            Okay
          </button>
        </div>
      </div>
    </div>
  </div>
  

  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-grow">
      <router-view />
      <UpButton/>

    </main>
    <Footer :sharedData="sharedData" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import UpButton from '@/components/UpButton.vue';
import { RouterView } from 'vue-router';

export default {
  components: {
    Header,
    Footer,
    UpButton,
    RouterView
  },
   methods: {
    checkShopHours() {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      if ((day >= 1 && day <= 5 && hour >= 9 && hour < 20) || (day === 0 || day === 6) && hour >= 10 && hour < 18) {
        this.isShopOpen = true;
      }else {
      this.isShopOpen = false;
      }
      
    },
  },
  data() {
    return {
      isShopOpen: false,
      sharedData: { Developer: 'Arshad' },
  }
  },
  created() {
    this.checkShopHours();
  },
};
</script>





<style>

</style>
