<template>
	<nav class="text-white">
		<!-- DESKTOP NAV -->
		<div class="flex flex-col">
			<button class="self-end lg:hidden focus:outline-none" type="button" @click="toggleMobileNav">
				<svg class="hamburger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="32" fill="currentColor"><path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" /></svg>
			</button>
			<div id="navigation" class="hidden lg:inline-block">
				<ul class="font-bold lg:text-lg">
					<li class="inline-block relative">
						<g-link class="nav__link" to="/" exact>About</g-link>
					</li>
					<li class="inline-block relative ml-8">
						<g-link class="nav__link" to="/mb-tobacco">MB Tobacco</g-link>
					</li>
					<li class="inline-block relative ml-8">
						<g-link class="nav__link" to="/vavavape">VaVaVape</g-link>
					</li>
					<li class="inline-block relative ml-8">
						<g-link class="nav__link" to="/motiben">MotiBen</g-link>
					</li>
					<li class="inline-block relative ml-8">
						<g-link class="nav__link" to="/real-estate">Real Estate</g-link>
					</li>
					<li class="inline-block relative ml-8">
						<g-link class="nav__link" to="/contact">Contact</g-link>
					</li>
				</ul>
				<span class="hidden bg-moticorp-500 w-5 h-1 inline-block"></span>
			</div>
		</div>
		<!-- MOBILE NAV -->
		<div v-show="isOpen" class="bg-black fixed flex flex-col h-full right-0 top-0 w-full z-50">
			<button class="focus:outline-none mb-4 pr-3 pt-8 self-end" type="button" @click="toggleMobileNav">
				<svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" fill="#F3822F" /></svg>
			</button>
			<ul class="font-bold text-center text-3xl">
				<li class="mb-4">
					<g-link class="nav__link" to="/" exact>About</g-link>
				</li>
				<li class="mb-4">
					<g-link class="nav__link" to="/mb-tobacco">MB Tobacco</g-link>
				</li>
				<li class="mb-4">
					<g-link class="nav__link" to="/vavavape">VaVaVape</g-link>
				</li>
				<li class="mb-4">
					<g-link class="nav__link" to="/motiben">MotiBen</g-link>
				</li>
				<li class="mb-4">
					<g-link class="nav__link" to="/real-estate">Real Estate</g-link>
				</li>
				<li class="mb-4">
					<g-link class="nav__link" to="/contact">Contact</g-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: "NavMenu",
	data: function() {
		return {
			isOpen: false
		};
	},
	methods: {
		toggleMobileNav() {
			this.isOpen = !this.isOpen;
		}
	}
};
</script>

<style>
.nav__link:after {
    @apply -mb-2;
    @apply absolute;
    @apply border-b-2;
    @apply border-moticorp-500;
    @apply bottom-0;
    @apply h-px;
    @apply inline-block;
    @apply left-0;
    @apply w-0;
    content: "";
}
.nav__link:hover:after {
    @apply w-8;
    transition: width 0.25s linear;
}
a.nav__link.active--exact.active:after { @apply w-8; }
</style>