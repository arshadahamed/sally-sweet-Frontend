<template>
  <div v-if="isBannerVisible" class="bg-gradient-sw text-white text-center p-2 text-xl">
    <span>Login and Print our special voucher to enhance your shopping experience!</span>
    <button @click="toggleBanner" class="float-right mr-2 text-lg">
      <i class="fas fa-times" @click="toggleBanner"></i>
    </button>
  </div>
  <header class="head">
    <div class="container mx-auto flex flex-wrap items-center justify-between px-2">
      <div class="flex items-center">
        <a href="/">
          <img src="../assets/Logo/Sally Sweet Logo.png" alt="Logo" class="w-20 h-12 md:w-24 md:h-24 lg:w-30 lg:h-20 mr-2 ml-2 my-2" />
        </a>

        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold px-3 text-blue-950">Sally Sweet</h1>
      </div>
      <nav :class="{'hidden': !isNavMenuVisible, 'flex': isNavMenuVisible, 'flex-row': true,'self-center': isNavMenuVisible, 'md:flex': true, 'md:flex-row': true, 'space-y-0': isNavMenuVisible, 'md:space-y-0': true, 'space-x-5': isNavMenuVisible, 'md:space-x-4': true}" class="nav-menu">
        <router-link :class="{'hover:text-blue-500 text-2xl font-bold': $route.path !== '/', 'text-sw-navy text-2xl font-bold': $route.path === '/'}" to="/" @click="scrollToTop">Home</router-link>
        <router-link :class="{'hover:text-blue-500 text-2xl font-bold': $route.path !== '/about', 'text-sw-navy text-2xl font-bold': $route.path === '/about'}" to="/about" @click="scrollToTop">About</router-link>
        <router-link :class="{'hover:text-blue-500 text-2xl font-bold': $route.path !== '/product', 'text-sw-navy text-2xl font-bold': $route.path === '/product'}" to="/product" @click="scrollToTop">Product</router-link>
        <router-link :class="{'hover:text-blue-500 text-2xl font-bold': $route.path !== '/room-booking', 'text-sw-navy text-2xl font-bold': $route.path === '/room-booking'}" to="/room-booking" @click="scrollToTop">Book a Room</router-link>
        <router-link v-if="isLoggedIn" :class="{'hover:text-blue-500 text-2xl font-bold': $route.path !== '/profile', 'text-sw-navy text-2xl font-bold': $route.path === '/profile'}" to="/profile" @click="scrollToTop">Profile</router-link>
      </nav>
      <div class="button-section">
        <button :class="{
            'hidden': !shouldShowButton, 
            'md:inline-block': true, 
            'bg-green-600': true, 
            'hover:bg-sw-blue': true, 
            'text-white': true, 
            'transition': true, 
            'duration-300': true, 
            'md:w-15': true, 
            'rounded-2xl': true, 
            'font-bold': true, 
            'py-2': true, 
            'px-4': true, 
            'focus:outline-none': true, 
            'focus:shadow-outline': true
          }" @click="makePhoneCall" 
        >
          <i class="fas fa-phone-alt mr-2"></i>
          Order on Call
        </button>

        <router-link :class="{ 'hidden': !isNavMenuVisible, 'md:inline-block px-6 py-3 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy': true }" to="/signup" @click="scrollToTop">Signup</router-link>
        <router-link :class="{ 'hidden': !isLoggedIn, 'md:inline-block px-6 py-3 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy': isLoggedIn }" @click="logOut" to="/logout">Logout</router-link>
        <router-link :class="{ 'hidden': isLoggedIn, 'md:inline-block px-6 py-3 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy': !isLoggedIn }" to="/login">Login</router-link>
        <button @click="toggleMenu" class="md:hidden text-pink-600">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      </div>
    </div>
    <img class="pt-1 w-full" src="../assets/Logo/melt-bg.png" alt="Melting Paint" />
  </header>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut, getIdTokenResult } from "firebase/auth";

export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false,
      isNavMenuVisible: false,
      isBannerVisible: true,
      sessionTimeout: null,
      shouldShowButton: false,
    };
  },
  created() {
    this.initializeAuthState();
    this.setupSessionTimeoutReset();
  },
  beforeDestroy() {
    this.removeSessionTimeoutReset();
  },
  methods: {
    initializeAuthState() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.isLoggedIn = true;
          sessionStorage.setItem('loggedIn', 'true');
          this.resetSessionTimeout();
          this.checkTokenExpiration();
          console.log(user);

        } else {
          this.isLoggedIn = false;
          sessionStorage.removeItem('loggedIn');
        }
      });
    },
    resetSessionTimeout() {
      clearTimeout(this.sessionTimeout);
      this.sessionTimeout = setTimeout(() => {
        this.logOut();
      }, 0.3 * 60 * 1000); 
    },
    checkTokenExpiration() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        getIdTokenResult(user).then(tokenResult => {
          const currentTime = new Date().getTime();
          const tokenExpirationTime = new Date(tokenResult.expirationTime).getTime();

          if (currentTime > tokenExpirationTime) {
            this.logOut();
          }
        });
      }
    },
    logOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.isLoggedIn = false;
        sessionStorage.removeItem('loggedIn');
        this.$router.push({ path: "/" });
        clearTimeout(this.sessionTimeout);
      }).catch((error) => {
        console.error("Error signing out:", error);
      });
    },
    setupSessionTimeoutReset() {
      window.addEventListener('mousemove', this.resetSessionTimeout);
      window.addEventListener('keypress', this.resetSessionTimeout);

    },
    removeSessionTimeoutReset() {
      window.removeEventListener('mousemove', this.resetSessionTimeout);
      window.removeEventListener('keypress', this.resetSessionTimeout);
    },
    toggleMenu() {
      this.isNavMenuVisible = !this.isNavMenuVisible;
    },
    toggleBanner() {
      this.isBannerVisible = false;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style scoped>
.head{
  @apply bg-white text-sw-pink sticky top-0 z-50;
}

.button-section {
  @apply flex items-center space-x-2 px-1 py-1;
}
.nav-menu {
  transition: all 0.5s ease-in-out;
  
  
}
.bg-gradient-sw {
  background: linear-gradient(to right, #FFC0CB, #0000FF); 
}

@media (min-width: 768px) {
  .head {
    @apply py-4;
  }
  .button-section {
    @apply space-x-4;
  }
  .nav-menu {
    @apply flex-row space-x-4;
  }
}
</style>
