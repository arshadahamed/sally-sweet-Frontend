<template>
 
  <div class="relative">
    <img class="w-full h-full object-cover" src="../assets/Images/banner2.jpg" alt="hero-image">
    <div class="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 class="media-sm text-3xl  font-bold text-sw-navy p-2 mb-4">Delight in Every Bite</h1>
        <p class="text-xl text-sw-navy pb-5">With The Premior Product</p>
        <router-link to="/product" class="bg-sw-pink hover:bg-sw-blue text-white font-bold py-2 px-6 rounded-3xl focus:outline-none focus:shadow-outline">Explore our Sweets</router-link>
    </div>
  </div>


  <div class="flex flex-col items-center justify-center mt-8 mb-8">
      <h1 class="mb-10 text-3xl font-bold text-sw-navy justify-center">Upcoming Special Events</h1>
      <div class="flex flex-wrap mt-5 mb-1 items-center justify-center space-x-4 ">
          <EventCard
              v-for="event in events"
              :key="event.id"
              :title="event.title"
              :imageUrl="event.image"
              :description="event.description"
              :date="event.date"
              class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
          />
      </div>
  </div>
  <div class="flex flex-row items-center justify-center mt-8 mb-8">
      <h1 class="mb-10 text-3xl font-bold text-sw-navy justify-center">Our Bestselling Signature Offerings</h1>
      <div class="flex flex-wrap mt-5 mb-1 items-center justify-center space-x-4 ">
        <ProductCard
            v-for="product in products"
            :key="product.id"
            :name="product.name"
            :description="product.description"
            :price="'£' + product.price"
            :imageUrl="product.imageUrl"
            class=" px-1"
        />
      </div>
  </div>

  

  <div>
   <section class="py-2">
      <div class="relative" style="background-image: url('../assets/Images/banner3.jpg');">
        <div class="flex flex-col items-center justify-center mt-8 mb-8 py-3">
          <div class="flex flex-col items-center justify-center pd-2">
            <img src="../assets/Logo/Sally Sweet Logo.png" alt="Sally Sweet Logo" class="w-1/6 h-1/2 object-cover" />
          </div>
          <h1 class="text-4xl font-bold text-sw-navy">Discover the Delights at Sally Sweet</h1>
          <p class="text-2xl text-gray-600">The best place to find the best sweets</p>
          <div class="flex mt-6 justify-center items-center">
            <i class="fas fa-clock fa-2x text-gray-700 mr-2"></i>
            <h2 class="text-3xl font-semibold text-gray-700">Our Shop Hours</h2>
          </div>
          <div class="flex flex-col md:flex-row justify-center items-center mt-4">
            <div class="flex flex-col items-center mr-8">
              <i class="fas fa-calendar-week fa-lg text-gray-700 mr-2"></i>
              <h3 class="text-xl text-gray-700 font-medium">Weekdays</h3>
              <p class="text-lg text-gray-600">9:00 AM - 8:00 PM</p>
            </div>
            <div class="flex flex-col items-center">
              <i class="fas fa-calendar-alt fa-lg text-gray-700 mr-2"></i>
              <h3 class="text-xl text-gray-700 font-medium">Weekends</h3>
              <p class="text-lg text-gray-600">10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
  <div id="map" class="mb-4"></div>
</template>


<script>
import EventCard from '@/components/EventCard.vue';
import ProductCard from '@/components/ProductCard.vue';
import axios from 'axios';

export default {
  name: 'HomePage',
 
  components: {
    EventCard,
    ProductCard
  },
  data() {
    return {
      events: [],
      products: [],
      isMapReady: false,
    };
  },
  created() {
    axios.get('http://localhost:3000/events')
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.error('Error:', error);
      });

      axios.get('http://localhost:3000/products')
        .then(response => {
          this.products = response.data.filter(product => ['5', '2', '3'].includes(product.id));
        })
        .catch(error => {
          console.error('Error:', error);
        });    
  },
  mounted() {
    window.initMap = this.initMap;
    if (!this.isMapReady) {
      this.loadMapScript();
    }
  },
  methods: {
    initMap() {
      new google.maps.Map(document.getElementById("map"), {
        center: { lat: 53.10997992556149, lng: -2.0339148473958137},
        zoom: 17,
      });
      this.isMapReady = true;
    },
    loadMapScript() {
      const script = document.createElement('script');
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBY_ON2OpB5CixjqBM8EgISncsRA3Lbmtg&callback=initMap";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    },
    
  }
}

</script>

<style scoped>
  #map {
    height: 50vh;
    width: 100%;
    overflow: hidden;
    padding-bottom: 22.25%;
    padding-top: 30px;
    position: relative;

  }
  @media (max-width: 768px) {
    #map {
      height: 40vh;
    }
    
  }
  @media (min-width: 768px) {
    .media-sm{
      font-size: 3rem; 
  }
  }
</style>


