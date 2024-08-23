<template>
    <div v-if="isLoggedIn" class="profile-view">
        <div class="flex flex-col justify-center items-center ">
            <div class="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
                <h1 class="text-3xl font-bold text-sw-navy py-3">Profile Details</h1>
                <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                    <img src='../assets/Profile/banner-profile.png' class="absolute flex h-32 w-full justify-center rounded-xl bg-cover"> 
                    <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                        <img class="h-full w-full rounded-full" :src="auth.currentUser.photoURL || 'default-image-url.jpg'" alt="" />
                    </div>
                </div> 
                <div class="mt-16 flex flex-col items-center">
                     <p class="text-base font-normal text-sw-navy">{{ auth.currentUser.displayName }}</p>
                    <h4 v-if="auth.currentUser.email" class="text-xl font-bold text-navy-700 dark:text-white">
                        {{ auth.currentUser.email }}
                    </h4>
                   
                </div> 
                <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
                    <p class="text-base font-normal text-gray-600">
                        This is my profile description. I am a passionate developer who loves coding and building amazing applications.
                    </p>
                </div>
                <div class="flex flex-col py-5 w-40 hover:w-48">
                  <img :src="imageUrl" alt="Printable Image" />
                </div>
                <div class="flex flex-row ">
                    <button class="bg-sw-navy hover:bg-sw-pink text-white font-bold py-2 px-4 rounded" @click="printImage">
                    Print Voucher
                    </button>
                    <a download="../assets/Images/Voucher.png" class="bg-sw-navy hover:bg-sw-pink text-white font-bold py-2 px-4 rounded ml-4"  @click="downloadImage">
                        Download Voucher
                    </a>
                </div>
               
            </div>  
        </div>
    </div>
    <div v-else class="flex flex-col justify-center items-center">
    <p class="text-lg text-sw-navy">Log in to get your voucher</p>
    <router-link to="/login" class="bg-sw-navy hover:bg-sw-pink text-white font-bold py-2 px-4 rounded mt-4">
        Log In
    </router-link>
    </div>

</template>

<script>
import { getAuth} from "firebase/auth";
import { onMounted, ref } from "vue";
import { onAuthStateChanged } from 'firebase/auth';
import myImage from '@/assets/Images/Voucher.png';
export default {
    name: "ProfileView",
    data() {
    return {
      imageUrl: myImage, 
    };
    },
    methods: {
      printImage() {
        const printWindow = window.open(this.imageUrl);
        printWindow.onload = function() {
          setTimeout(() => {
            printWindow.print();
            printWindow.close();
          }, 0);
        };
      },
      downloadImage() {
      const link = document.createElement('a');
      link.href = this.imageUrl;
      link.download = 'Voucher.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      },
    },
    setup() {
        const auth = getAuth();
        const isLoggedIn = ref(false);

        onMounted(async () => {
            await new Promise((resolve, reject) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        isLoggedIn.value = true;
                        console.log(user.photoURL); 
                        resolve();
                    } else {
                        reject("No user logged in");
                    }
                });
            });
        });

        return { auth, isLoggedIn};
    },
};
</script>

<style scoped>
.profile-view {
    max-width: 600px;
    margin: 0 auto;
}
.hover\:w-48:hover {
    cursor: pointer;
    width: fit-content;

}
</style>

