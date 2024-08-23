<template>
  <div>
    <div class="flex flex-col md:flex-col justify-center items-center ">
      <div class="flex flex-col items-center mt-5 space-y-2">
        <img src="../assets/Logo/Sally Sweet Logo.png" alt="Sweets" class="w-1/6 h-1/6 object-cover p-5" />
      </div>
      <div  class="flex flex-col items-center mt-5 space-y-2 px-16">
        <h1 class="text-4xl font-bold text-sw-navy py-1">Welcome to Sally Sweet - Your Ultimate Online Sweet</h1>
        <p class="text-2xl text-gray-600 py-3">The best place to find the best sweets</p>
        <p class="text-2xl text-gray-600 py-3">The U.K.'s favourite Sweet Shop and a beacon of delight for sweet lovers everywhere. We're a family-owned enterprise, brought to life by the tireless dedication and entrepreneurial spirit of the Robinson family. Rooted in over three decades of rich retail experience, Sally Sweet is a testament to our unwavering commitment to our customers, quality confections, and shared love for all things sweet.</p>
      </div>
      <br>
      <div  class="flex flex-col items-center mt-5 space-y-2 px-16">
        <h1 class="text-4xl font-bold text-sw-navy py-1">Our Story</h1>
        <p class="text-2xl text-gray-600 py-3">Sally, the founder of Sally Sweet, has been a stalwart in the food industry for over 20 years. His depth of knowledge, paired with the retail and wholesale expertise of her husband, Sam, shaped the foundation of Sally Sweet. From our humble beginnings as a fruit and veg business, an unexpected opportunity in 2009 allowed us to tap into the vibrant world of sweets. We took the leap, setting up pop-up shops in various locations and slowly but surely, forged our unique path in the confectionery industry.
        Her keen eye for innovation identified multiple industry gaps, leading to the creation of an array of solutions that redefined our customer's experience. This transformative digital evolution was characterized by a wave of safe, user-friendly, and appealing ways to indulge in the best sweets on the market.</p>
      </div>
      <div  class="flex flex-col items-center mt-5 space-y-2 px-16">
        <h1 class="text-4xl font-bold text-sw-navy py-1">Our Growth</h1>
        <p class="text-2xl text-gray-600 py-3">Our growth has been exponential, and we've come a long way since our first pop-up shop. We now have a thriving online store, a flagship store in Leek, and a growing network of franchises across the U.K. We're proud to be the U.K.'s largest online sweet shop, with over 4,000 products and counting. We're also the proud owners of the world's largest sweet shop, located in the heart of Leek, Staffordshire. Our flagship store is a must-visit for sweet lovers everywhere, with over 4000 products and a host of exciting attractions.</p>
  
      </div>
    </div>
  </div>
  <div class="flex flex-col md:flex-col justify-center mt-4 mb-10">
    <div class="flex flex-col items-center mt-5 space-y-2">
      <h1 class="text-4xl font-bold text-sw-navy py-1">Contact Us</h1>
      <h2 class="text-lg font-normal tracking-tight text-sw-navy">
        <span class="font-bold">Address:</span> {{shopDetaile.address}}
      </h2>
      <h2 class="text-lg font-normal tracking-tight text-sw-navy">
        <span class="font-bold">Contact:</span> {{shopDetaile.contact}}
      </h2>
      <h2 class="text-lg font-normal tracking-tight text-sw-navy">
        <span class="font-bold">Email:</span> {{shopDetaile.email}}
      </h2>
    </div>
  </div>
  <div id="map" ></div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
     shopDetaile: {
          name: 'Sally Sweet',
          address: 'Abbey Green Road, Leek, UK.',
          contact: '+44 133245 11',
          email: 'info@sallysweet.uk',  
     },
     isMapReady: false,
    };
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
    }
  }

};
</script>

<style scoped>
   #map {
    height: 50vh;
    width: 100%;
    margin: auto;
    overflow: hidden;
    padding-bottom: 22.25%;
    padding-top: 30px;
    position: relative;

  }
  @media (max-width: 768px) {
    #map {
      height: 40vh;
    }
    .media-sm{
      font-size: 3rem; 
  }
  }
</style>
