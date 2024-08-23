<template>
    <section class="py-10 bg-white">
        <div class="container">
            <div class="row">	
            <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
            <div class="four_zero_four_bg">
                <h1 class="mb-10 text-2xl font-bold text-sw-navy justify-center">Page Not Found</h1>
            
            
            </div>
            
            <div class="contant_box_404">
            <h3 class="text-sm font-bold text-sw-navy align-center">
            Look like you're lost
            </h3>
            
            <p class="mb-5">the page you are looking for not avaible!</p>
            
            <a href="/" class="px-6 py-3 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy">Go to Home</a>
        </div>
            </div>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style>


.page_404  img{ width:100%;}

.four_zero_four_bg{
 
 background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    width: 100%;
    background-position: center;
 }
 
 

 
.four_zero_four_bg h3{
			 font-size:80px;
			 }
			 
			 .link_404{			 
	color: #fff!important;

    background: #1c285a;
    display: inline-block;}
	.contant_box_404{ margin-top:-50px;}
</style>
