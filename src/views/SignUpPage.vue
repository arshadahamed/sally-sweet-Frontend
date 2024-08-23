<template>
<body class="bg-white rounded-lg">
        <div class="container flex flex-col mx-auto bg-white rounded-lg pt-2 pd-6">
            <div class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                <div class="flex items-center justify-center w-full lg:p-12">
                    <div class="flex items-center xl:p-10">
                        <form @submit.prevent="registerWithEmail" class="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                          <h3 class="mb-3 text-3xl font-extrabold text-sw-navy py-5">Register Your Account</h3>
                            <label for="email" class="mb-2 text-sm text-start text-grey-900">Email*</label>
                            <input v-model="email" id="email" type="email" ref="emailInput" placeholder="Enter your email" class="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-slate-300 mb-7 placeholder:text-sw-grey-700 bg-sw-grey-200 text-dark-sw-grey-900 rounded-2xl"/>

                            <label for="password" class="mb-2 text-sm text-start text-grey-900">Password*</label>
                            <input v-model="password" id="password" type="password" placeholder="Enter a password" class="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-slate-300 placeholder:text-sw-grey-700 bg-sw-grey-200 text-sw-grey-900 rounded-2xl"/>

                            <button type="submit" class="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy">Sign Up</button>
                            <p class="text-sm leading-relaxed text-sw-grey-900">Already Register? <a href="/login" class="font-bold text-grey-700">Login Here</a></p>

                            <!-- Display message -->
                            <p v-if="message" class="text-red-500">{{ message }}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>
  
  <script>
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  export default {
    name: 'SignUpPage',
    data() {
      return {
        email: '',
        password: '',
        message: ''
      }
    },
    methods: {
      async registerWithEmail() {
        const auth = getAuth()
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password)
          this.message = 'Register with email successful!'
          this.$router.push('/login')
        } catch (error) {
          console.error(error)
          this.message = 'Register with email failed.'

          this.email = '';
          this.password = '';

          this.$nextTick(() => {
          if (this.$refs.emailInput) {
          this.$refs.emailInput.focus();
            }
          });
        }
      }
    },
    created() {
      if (this.$route.query.email) {
        this.email = this.$route.query.email;
      }
    }
  }
  </script>
  