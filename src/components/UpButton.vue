<template>
    <button
      v-show="visible" @click="scrollToTop"
      class="fixed bottom-5 right-5 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"
    >
      ↑ Top
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of page smoothly
      },
      handleScroll() {
        this.visible = window.scrollY > 150; // Show button when window is scrolled down 150px
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
  </script>
  