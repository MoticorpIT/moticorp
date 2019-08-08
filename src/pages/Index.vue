<template>
	<Layout>
        <section id="hero" class="-mt-32 container flex items-center md:mb-0 mb-12 lg:px-0 mx-auto px-6 text-white">
            <div class="max-w-xl pt-12">
                <hr class="border-2 border-moticorp-500 w-1/6 mb-8 mx-0">
                <h2 class="font-hero leading-none md:text-7xl text-5xl" style="opacity: 1; transform: translateY(0px);">Motivation in Motion.</h2>
                <p class="text-lg text-gray-400 mt-8 mb-10 font-light tracking-widest">Moticorp is dedicated to creating and developing great brands and customer-centric shops. Always in motion, Moticorp is constantly growing and tapping into markets in the retail, online, and dining industries. Our motivation and mission is to be unique, be great and be first.</p>
                <g-link class="btn border-2 border-moticorp-500 font-bold inline-block px-12 py-4 text-lg text-white" to="/contact" style="opacity: 1; transform: translateY(0px);">Contact Us</g-link>
            </div>
        </section>
        <hr class="hr">
        <section class="bg-white">
            <div class="container mx-auto pt-16 pb-20">
                <div class="flex items-center mb-8">
                    <div class="">
                        <hr class="">
                        <h2 class="font-bold text-5xl">Companies.</h2>
                        <span class="text-moticorp-500 text-lg font-semibold">It's More Than Just Business</span>
                    </div>
                    <div class="max-w-2xl ml-48">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti temporibus fuga earum asperiores, alias excepturi sit. Impedit, fugit laudantium.</p>
                    </div>
                </div>
                
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full md:w-1/2 px-4 my-4">
                        <g-image src="~/images/hero-image.png" fit="contain" class="w-full" alt="" />
                    </div>
                    <div class="w-full md:w-1/2 px-4 my-4">
                        <g-image src="~/images/hero-image.png" fit="contain" class="w-full" alt="" />
                    </div>
                    <div class="w-full md:w-1/2 px-4 my-4">
                        <g-image src="~/images/hero-image.png" fit="contain" class="w-full" alt="" />
                    </div>
                    <div class="w-full md:w-1/2 px-4 my-4">
                        <g-image src="~/images/hero-image.png" fit="contain" class="w-full" alt="" />
                    </div>
                </div>
                
                <!-- <div class="flex -mx-4">
                    <div class="w-1/3 px-4">
                        <h3 class="font-bold mb-2 text-2xl capitalize">Who we are</h3>
                        <p class="">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward will have multiple touchpoints for offshoring.</p>
                    </div>
                    <div class="w-1/3 px-4">
                        <h3 class="font-bold mb-2 text-2xl capitalize">Our philosophy</h3>
                        <p class="">A new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time.</p>
                    </div>
                    <div class="w-1/3 px-4">
                        <h3 class="font-bold mb-2 text-2xl capitalize">How we work</h3>
                        <p class="">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                    </div>
                </div> -->
                    
            </div>
        </section>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "Home"
	}
};
</script>

<style>
#hero {
    background-image: url('~@/images/hero-image.png');
    background-color: #000000;
    width: 100% !important; /* 1200px */
    height: 750px; /* 750px */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.hr {
    position: relative;
    margin: -30px auto;
    border: 0;
    border-left: 2px solid;
    border-color: #F3822F;
    width: 2px;
    height: 60px;
    z-index: 10;
}

.btn {
    background: linear-gradient(to right, #F3822F 50%, #000000 50%);
    background-size: 200% 100%;
    background-position:right bottom;
    transition:all .7s ease;
}
.btn:hover {
    background-position: left bottom;
}
</style>
