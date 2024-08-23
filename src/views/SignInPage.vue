<template>
    <div v-if="message" class="fixed top-0 left-1/2 transform -translate-x-1/2 mt-5 z-50 bg-red-500 text-white px-6 py-3 rounded shadow-lg">
            {{ message }}
    </div>
    <body class="bg-white rounded-lg">
        <div class="container flex flex-col mx-auto bg-white rounded-lg pd-12">
            <div class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                <div class="flex items-center justify-center w-full lg:p-12">
                    <div class="flex items-center xl:p-10">
                        <form @submit.prevent="signInWithEmail" class="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                            <h3 class="mb-3 text-4xl font-extrabold text-dark-grey-900">login</h3>
                            <p class="mb-4 text-grey-700">Enter your email and password</p>
                            
                            <button @click="signInWithGoogle" type="button" class="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-sw-grey-900 bg-sw-grey-300 hover:bg-sw-grey-400 focus:ring-4 focus:ring-sw-grey-300">
                                <img class="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="Google logo">
                                Sign in with Google
                            </button>

                            <div class="flex items-center mb-3">
                                <hr class="h-0 border-b border-solid border-grey-500 grow">
                                <p class="mx-4 text-grey-600">or</p>
                                <hr class="h-0 border-b border-solid border-grey-500 grow">
                            </div>
                            <label for="email" class="mb-2 text-sm text-start text-grey-900">Email*</label>
                            <input v-model="email" id="email" type="email" placeholder="Enter your email" class="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-slate-300 mb-7 placeholder:text-sw-grey-700 bg-sw-grey-200 text-dark-sw-grey-900 rounded-2xl"/>

                            <label for="password" class="mb-2 text-sm text-start text-grey-900">Password*</label>
                            <input v-model="password" id="password" type="password" placeholder="Enter a password" class="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-slate-300 placeholder:text-sw-grey-700 bg-sw-grey-200 text-sw-grey-900 rounded-2xl"/>

                            <button type="submit" class="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy">Sign In</button>
                            <p class="text-sm leading-relaxed text-sw-grey-900">Not registered yet? <a href="/signup" class="font-bold text-grey-700">Create an Account</a></p>
                  
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
  name: 'SignInPage',
  data() {
    return {
      email: '',
      password: '',
      message: '',
    };
  },
  methods: {
    async signInWithEmail() {
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.showMessage('Sign in with email successful!');
        this.$router.push('/profile');
      } catch (error) {
        console.error(error);
        this.showMessage('Sign in with email failed.');
      }
    },
    async signInWithGoogle() {
      const auth = getAuth();
      try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        this.showMessage('Sign in with Google successful!');
        this.$router.push('/profile');
      } catch (error) {
        console.error(error);
        this.showMessage('Sign in with Google failed.');
      }
    },
    showMessage(msg) {
      this.message = msg;
      setTimeout(() => {
        this.message = '';
      }, 3000);
    },
  },
}
</script>