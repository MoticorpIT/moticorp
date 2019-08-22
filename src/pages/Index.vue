<template>
	<Layout>
		<section id="hero" class="-mt-32 container flex items-center md:mb-0 mb-12 lg:px-0 mx-auto px-6 text-white" >
			<div class="max-w-xl pt-12">
				<hr class="border-2 border-moticorp-500 w-1/6 mb-8 mx-0" />
				<h2 class="font-hero leading-none md:text-7xl text-5xl">Motivation in Motion.</h2>
				<p class="text-lg text-gray-400 mt-8 mb-10 font-light tracking-widest">
                    Moticorp is dedicated to creating and developing great brands and customer-centric shops. Always in motion, Moticorp is constantly growing and tapping into markets in the retail, online, and dining industries. Our motivation and mission is to be unique, be great and be first.
                </p>
				<g-link to="/contact" class="btn border-2 border-moticorp-500 font-bold inline-block px-12 py-4 text-lg text-white">Contact Us</g-link>
			</div>
		</section>
		<hr class="hr" />
		<section class="bg-white">
			<div class="container mx-auto pt-16 pb-20">
				<div class="flex flex-wrap items-center mb-8">
					<div class>
						<hr class="border-orange-500 m-0 mb-2 w-12" />
						<h2 class="font-bold text-5xl">Companies.</h2>
						<span class="text-moticorp-500 text-lg font-semibold">It's More Than Just Business</span>
					</div>
					<div class="max-w-2xl lg:ml-48">
						<p>When it comes to success, it's not always about the bottom line. Yes, it's important, but growing the community is just as important to us. If we succeed, we also help the community succeed. In our book, that's a win-win for everyone.</p>
					</div>
				</div>

				<div class="flex flex-wrap md:-mx-4">
					<div class="parent md:px-4 md:w-1/2 my-4 w-full relative">
						<g-link to="/mb-tobacco" alt="Moticorp's MB Tobacco Company">
							<g-image src="~/images/hero-image.png" fit="contain" class="w-full" alt="MB Tobacco Company Logo" />
                            <div class="overlay absolute bottom-0 mb-4 ml-4 text-white opacity-0">
                                <h3 class="font-bold text-3xl">MB Tobacco</h3>
                                <ul>
                                    <li class="inline-block mr-4">
                                        <svg class="fill-current inline-block mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path d="M20 11.46V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-4h-2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8.54A4 4 0 0 1 2 8V7a1 1 0 0 1 .1-.45l2-4A1 1 0 0 1 5 2h14a1 1 0 0 1 .9.55l2 4c.06.14.1.3.1.45v1a4 4 0 0 1-2 3.46zM18 12c-1.2 0-2.27-.52-3-1.35a3.99 3.99 0 0 1-6 0A3.99 3.99 0 0 1 6 12v8h3v-4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4h3v-8zm2-4h-4a2 2 0 1 0 4 0zm-6 0h-4a2 2 0 1 0 4 0zM8 8H4a2 2 0 1 0 4 0zm11.38-2l-1-2H5.62l-1 2h14.76z" />
                                        </svg>
                                        Retail
                                    </li>
                                    <li class="inline-block">
                                        <svg class="fill-current inline-block mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                        </svg>
                                        10 Locations
                                    </li>
                                </ul>
                            </div>
						</g-link>
					</div>
					<div class="parent md:px-4 md:w-1/2 my-4 w-full relative">
						<g-link to="/vavavape" alt="Moticorp's Vavavape Company">
							<g-image src="~/images/hero-image.png" fit="contain" class="w-full" alt="Vavavape Company Logo" />					
                            <div class="overlay absolute bottom-0 mb-4 ml-4 text-white opacity-0">
                                <h3 class="font-bold text-3xl">VaVaVape</h3>
                                <ul>
                                    <li class="inline-block mr-4">
                                        <svg class="fill-current inline-block mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path d="M20 11.46V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-4h-2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8.54A4 4 0 0 1 2 8V7a1 1 0 0 1 .1-.45l2-4A1 1 0 0 1 5 2h14a1 1 0 0 1 .9.55l2 4c.06.14.1.3.1.45v1a4 4 0 0 1-2 3.46zM18 12c-1.2 0-2.27-.52-3-1.35a3.99 3.99 0 0 1-6 0A3.99 3.99 0 0 1 6 12v8h3v-4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4h3v-8zm2-4h-4a2 2 0 1 0 4 0zm-6 0h-4a2 2 0 1 0 4 0zM8 8H4a2 2 0 1 0 4 0zm11.38-2l-1-2H5.62l-1 2h14.76z" />
                                        </svg>
                                        Retail, Manufacturing
                                    </li>
                                    <li class="inline-block">
                                        <svg class="fill-current inline-block mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                        </svg>
                                        5 Locations
                                    </li>
                                </ul>
                            </div>
                        </g-link>
					</div>
					<div class="parent md:px-4 md:w-1/2 my-4 w-full relative">
						<g-link to="/motiben" alt="Moticorp's MotiBen Company">
							<g-image src="~/images/hero-image.png" fit="contain" class="w-full" alt="Motiben Company Logo" />
                            <div class="overlay absolute bottom-0 mb-4 ml-4 text-white opacity-0">
                                <h3 class="font-bold text-3xl">MotiBen</h3>
                                <ul>
                                    <li class="inline-block mr-4">
                                        <svg class="fill-current inline-block mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path d="M20 11.46V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-4h-2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8.54A4 4 0 0 1 2 8V7a1 1 0 0 1 .1-.45l2-4A1 1 0 0 1 5 2h14a1 1 0 0 1 .9.55l2 4c.06.14.1.3.1.45v1a4 4 0 0 1-2 3.46zM18 12c-1.2 0-2.27-.52-3-1.35a3.99 3.99 0 0 1-6 0A3.99 3.99 0 0 1 6 12v8h3v-4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4h3v-8zm2-4h-4a2 2 0 1 0 4 0zm-6 0h-4a2 2 0 1 0 4 0zM8 8H4a2 2 0 1 0 4 0zm11.38-2l-1-2H5.62l-1 2h14.76z" />
                                        </svg>
                                        Retail
                                    </li>
                                    <li class="inline-block">
                                        <svg class="fill-current inline-block mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                        </svg>
                                        3 Locations
                                    </li>
                                </ul>
                            </div>
                        </g-link>
					</div>
					<div class="parent md:px-4 md:w-1/2 my-4 w-full relative">
						<g-link to="/real-estate" alt="MotiCorp Real Estate Company">
							<g-image src="~/images/hero-image.png" fit="contain" class="w-full" alt="Real Estate Company Logo" />
                            <div class="overlay absolute bottom-0 mb-4 ml-4 text-white opacity-0">
                                <h3 class="font-bold text-3xl">Real Estate</h3>
                                <ul>
                                    <li class="inline-block mr-4">
                                        <svg class="fill-current inline-block mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path d="M20 11.46V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-4h-2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8.54A4 4 0 0 1 2 8V7a1 1 0 0 1 .1-.45l2-4A1 1 0 0 1 5 2h14a1 1 0 0 1 .9.55l2 4c.06.14.1.3.1.45v1a4 4 0 0 1-2 3.46zM18 12c-1.2 0-2.27-.52-3-1.35a3.99 3.99 0 0 1-6 0A3.99 3.99 0 0 1 6 12v8h3v-4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4h3v-8zm2-4h-4a2 2 0 1 0 4 0zm-6 0h-4a2 2 0 1 0 4 0zM8 8H4a2 2 0 1 0 4 0zm11.38-2l-1-2H5.62l-1 2h14.76z" />
                                        </svg>
                                        Residential, Commercial, Multi-Tenant
                                    </li>
                                </ul>
                            </div>
                        </g-link>
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
				</div>-->
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
	background-image: url("~@/images/hero-image.png");
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
	border-color: #f3822f;
	width: 2px;
	height: 60px;
	z-index: 10;
}

.btn {
	background: linear-gradient(to right, #f3822f 50%, #000000 50%);
	background-size: 200% 100%;
	background-position: right bottom;
	transition: background-position 0.7s ease;
}
.btn:hover {
	background-position: left bottom;
}

.parent img {
    filter: grayscale(1);
    transition: filter 0.5s linear;
}
.parent:hover img { filter: grayscale(0) }

.parent .overlay {
    opacity: 0;
    transition: opacity 0.5s linear; 
}
.parent:hover .overlay { opacity: 1; }
</style>
