<template>
  <div class="relative flex w-96 flex-col rounded-x bg-white bg-clip-border text-gray-700 shadow-md">
    <div class="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
      <img :src="imageUrl" alt="Event Image" class="w-full h-auto" />
    </div>
    <div class="flex-col justify-center w-full p-4 pt-4 ">
      <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {{ title }}
      </h5>
      <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {{ description }}
      </p>
    </div>
    <div class="flex p-6 pt-0 justify-center">
      <router-link
          class="inline-block px-6 py-3 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy"
          to="/room-booking"
          role="button"
          >
          Book Event
      </router-link>
    </div>
  </div>
</template>
  
<script>
  export default {
      props: {
          title: {
              type: String,
              required: true
          },
          imageUrl: {
              type: String,
              required: true
          },
          description: {
              type: String,
              required: true
          },
          date: {
              type: String,
              required: false
          }
      }
  }
</script>
  