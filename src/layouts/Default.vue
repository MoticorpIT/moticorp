<template>
	<div class="layout">
        <header class="container mx-auto py-10">
            <div class="flex items-center justify-between md:px-0 px-6">
                <g-link to="/">
                    <g-image src="~/images/moticorp-logo.svg" alt="Moticorp Logo" class="w-4/5 md:w-full" />
                </g-link>

                <NavMenu></NavMenu>

                <!-- <nav class="">
                    <ul class="font-bold text-lg hidden md:block">
                        <li class="inline-block" style="opacity: 1; transform: translateX(0px);">
                            <g-link class="nav__link" to="/" exact>About</g-link>
                        </li>
                        <li class="inline-block ml-8" style="opacity: 1; transform: translateX(0px);">
                            <g-link class="nav__link" to="/mb-tobacco">MB Tobacco</g-link>
                        </li>
                        <li class="inline-block ml-8" style="opacity: 1; transform: translateX(0px);">
                            <g-link class="nav__link" to="/vavavape">VaVaVape</g-link>
                        </li>
                        <li class="inline-block ml-8" style="opacity: 1; transform: translateX(0px);">
                            <g-link class="nav__link" to="/motiben">MotiBen</g-link>
                        </li>
                        <li class="inline-block ml-8" style="opacity: 1; transform: translateX(0px);">
                            <g-link class="nav__link" to="/real-estate">Real Estate</g-link>
                        </li>
                        <li class="inline-block ml-8" style="opacity: 1; transform: translateX(0px);">
                            <g-link class="nav__link" to="/contact">Contact</g-link>
                        </li>
                    </ul>
                    <span class="hidden bg-moticorp-500 w-5 h-1 inline-block"></span>
                    <div class="block md:hidden">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav> -->
            
            </div>
        </header>
        <main class="">
    		<slot />
        </main>
	</div>
</template>

<static-query>
query {
    metaData {
        siteName
    }
}
</static-query>

<script>
import NavMenu from '~/components/NavMenu.vue'
export default {
    components: {
        NavMenu,
    }
}
</script>

<style>
</style>
