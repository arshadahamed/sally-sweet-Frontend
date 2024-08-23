<template>
    <div class="flex items-center justify-center p-12">
    <!-- Author: FormBold Team -->
    <div class="mx-auto w-full max-w-[550px] bg-white">
        <h1 class="text-sw-navy font-extrabold mb-5 pt-3">Book A Private Room</h1>
        <form>
            <div class="mb-5">
                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                </label>
                <input type="text" name="name" id="name" placeholder="Full Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Phone Number
                </label>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                    Email Address
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                            Date
                        </label>
                        <input type="date" name="date" id="date"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                            Time
                        </label>
                        <input type="time" name="time" id="time"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>

            <div class="mb-5 pt-3">
                <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                    Select Room 
                </label>
                <div class="flex flex-row items-center mt-5 space-x-4">
                    <button class="rounded-md bg-sw-blue hover:bg-[#5acc4b] py-3 px-6 text-base font-medium text-white outline-none">
                        Room 1
                    </button>
                    <button class="rounded-md bg-sw-blue hover:bg-[#5acc4b] py-3 px-6 text-base font-medium text-white outline-none">
                        Room 2
                    </button>
                    <button class="rounded-md bg-sw-blue hover:bg-[#5acc4b] py-3 px-6 text-base font-medium text-white outline-none">
                        Room 3
                    </button>
                </div>
            </div>

            <div>
                <button
                    class="hover:shadow-form w-full rounded-md bg-sw-pink hover:bg-sw-navy py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Book Appointment
                </button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: "RoomBookingPage",
};
</script>

<style scoped>
</style>
