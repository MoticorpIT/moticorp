<template>
	<Layout>
        <section id="hero" class="-mt-32 container flex items-center mb-24 md:px-0 mx-auto px-6 text-white">
            <div class="max-w-xl pt-12">
                <hr class="border-2 border-moticorp-500 w-1/6 mb-8 mx-0">
                <h2 class="font-hero leading-none md:text-7xl text-5xl" style="opacity: 1; transform: translateY(0px);">Motivation in Motion.</h2>
                <p class="text-lg text-gray-400 mt-8 mb-10 font-light tracking-widest">Moticorp is dedicated to creating and developing great brands and customer-centric shops. Always in motion, Moticorp is constantly growing and tapping into markets in the retail, online, and dining industries. Our motivation and mission is to be unique, be great and be first.</p>
                <a class="bg-black border-2 border-moticorp-500 font-bold inline-block px-12 py-4 text-lg text-white" href="/" style="opacity: 1; transform: translateY(0px);">Contact Us</a>
            </div>
        </section>
        <hr class="pr__vr__section">
        <section class="bg-white">
            <div class="container mx-auto">
                <div>
                    <div class="">
                        <hr class="">
                        <h2 class="">What Clients Say.</h2>
                        <span class="">From all over the world</span>
                    </div>
                    <div class="">
                        <p class="">We are motivated by the satisfaction of our clients. Put your trust in us and share
                            in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for
                            financial markets. Our goal is to achieve continuous and sustainable growth of our clients.</p>
                        <p class="">Aron Smith, UX Designer</p>
                    </div>
                </div>
                <div class="container mx-auto">
                    <div class="">
                        <hr class="">
                        <div class="">
                            <div class="">
                                <div class="inline-block">
                                    <g-image src="~/images/moticorp-logo.svg" class="w-1/4"></g-image>
                                </div>
                                <div class="inline-block">
                                    <g-image src="~/images/moticorp-logo.svg" class="w-1/4"></g-image>
                                </div>
                                <div class="inline-block">
                                    <g-image src="~/images/moticorp-logo.svg" class="w-1/4"></g-image>
                                </div>
                                <div class="inline-block">
                                    <g-image src="~/images/moticorp-logo.svg" class="w-1/4"></g-image>
                                </div>
                                <div class="inline-block">
                                    <g-image src="~/images/moticorp-logo.svg" class="w-1/4"></g-image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    background-image: url(~@/images/hero-image.png);
    background-color: #000000;
    width: 100% !important; /* 1200px */
    height: 750px; /* 750px */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.pr__vr__section {
    position: relative;
    margin: -30px auto;
    border: 0;
    border-left: 2px solid;
    border-color: #F3822F;
    width: 2px;
    height: 60px;
    z-index: 10;
}
</style>
