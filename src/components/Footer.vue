<template>
  <footer class="bg-sw-blue">
    <div class="container px-6 py-12 mx-auto">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <div class="sm:col-span-2">
          <a href="/">
            <img class="w-25 h-20 m-2" src="../assets/Logo/Sally Sweet Word mark.png" alt="">
          </a>
          <h1 class="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl m-2">Subscribe Get Voucher Card.</h1>
          <h3 class="max-w-lg text-sm font-regular tracking-tight text-white m-2">Don't miss Events and Promotions</h3>
          
          <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row m-2">
            <input class="flex items-center w-60 px-5 text-sm font-medium outline-none focus:bg-white  placeholder:text-sw-grey-700 bg-white text-dark-sw-grey-900 rounded-2xl" v-model="email" type="email" placeholder="Enter your Email">
            <button 
              class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-sw-pink rounded-lg hover:bg-sw-navy focus:ring focus:ring-gray-300 focus:ring-opacity-80 media-btn"
              @click="subscribe"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div class="sm:col-span-1">
          <h1 class="text-2xl font-bold text-white">{{shopDetaile.name}}</h1>
          <div class="flex flex-col items-start mt-5 space-y-2">
            <div class="flex items-center">
              <i class="fas fa-map-marker-alt fa-lg text-white mr-2"></i>
              <h2 class="text-lg font-normal tracking-tight text-white">
                <span class="font-bold">Address:</span> {{shopDetaile.address}}
              </h2>
            </div>
            <div class="flex items-center">
              <i class="fas fa-phone fa-lg text-white mr-2"></i>
              <h2 class="text-lg font-normal tracking-tight text-white">
                <span class="font-bold">Contact:</span> {{shopDetaile.contact}}
              </h2>
            </div>
            <div class="flex items-center">
              <i class="fas fa-envelope fa-lg text-white mr-2"></i>
              <h2 class="text-lg font-normal tracking-tight text-white">
                <span class="font-bold">Email:</span> {{shopDetaile.email}}
              </h2>
            </div>
          </div>
        </div>


        <div class="mx-12">
          <h1 class="font-bold text-white text-2xl underline">Social Media</h1>
          <h2 class="font-regular text-sm-navy text-sm mt-2">Follow us on social media</h2>
          <div class="flex flex-row items-center mt-5 space-x-4">
            <a href="https://www.facebook.com/sallysweet/" target="_blank" class="text-white hover:text-sw-pink">
              <font-awesome-icon :icon="['fab', 'facebook']" class="text-3xl hover:scale-110 transition-transform duration-200"/>
            </a>
            <a href="https://www.instagram.com" target="_blank" class="text-white hover:text-sw-pink">
              <font-awesome-icon :icon="['fab', 'instagram']" class="text-3xl hover:scale-110 transition-transform duration-200"/>
            </a>
          </div>
          <div>
            <h2 class="text-lg font-semibold text-white pt-5 underline">Our Shop Hours</h2>
            <div class="flex flex-col md:flex-row justify-center items-start mt-4 space-y-4 md:space-y-0 md:space-x-8">
              <div class="flex flex-col items-center">
                <i class="fas fa-calendar-week fa-sm text-white mr-2"></i>
                <h3 class="text-lg text-white font-medium">Weekdays</h3>
                <p class="text-xs text-white">9:00 AM - 8:00 PM</p>
              </div>
              <div class="flex flex-col items-center">
                <i class="fas fa-calendar-alt fa-sm text-white mr-1"></i>
                <h3 class="text-lg text-white font-medium">Weekends</h3>
                <p class="text-xs text-white">10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <div class="pt-7 pb-7 px-0">
          <div class="w-full pr-3 pl-3 mx-auto">
            <div class="color-white text-center text-white font-medium justify-center">
              <p>© 2024 Sally Sweet. All Rights Reserved by <a href="#">{{ sharedData.Developer }}</a></p>
            </div>
          </div>
        </div>
  </footer>
</template>

<style>

</style>

<script>
export default {
  name: "Footer",
  props: {
    sharedData: Object,
  },
  methods: {
    subscribe() {
      this.$router.push({ name: 'Signup', query: { email: this.email }}).then(() => {
        this.email = '';
      });
    }
  },
  data() {
    return {
     shopDetaile: {
          name: 'Sally Sweet',
          address: 'Abbey Green Road, Leek, UK.',
          contact: '+44 133245 11',
          email: 'info@sallysweet.uk',  
     },
     isLoggedIn: false, 
     email: '',
    };
  },
  
  


};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .media-btn {
    width: 50%;
  }
}
</style>





