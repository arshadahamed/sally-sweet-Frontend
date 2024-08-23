<template>
    <div class="max-w-sm border-sw-blue rounded overflow-hidden shadow-lg m-4 ">
      <img class="w-full h-48 object-cover p-10" :src="imageUrl" alt="Product image">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-sw-choco">{{ name }}</div>
        <p class="text-amber-700 text-base">
          {{ description }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 flex justify-between items-center">
        <span class="inline-block bg-white-300 rounded-full px-3 py-1 text-3xl font-bold text-sw-navy mr-2 mb-2">{{ price }}</span>
        <button @click="makePhoneCall" class="bg-pink-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Call for Order</button>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: ['name', 
            'description', 
            'price', 
            'imageUrl'],
    methods: {
        makePhoneCall() {
            window.location.href = `tel:${this.phoneNumber}`; // Open the dialer with the phone number
        }
    }
  }
</script>
<style>
  
</style>
  