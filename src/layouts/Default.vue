<template>
	<div class="layout">
        <header class="container mx-auto py-10">
            <div class="flex items-center justify-between lg:px-0 px-6">
                <g-link to="/">
                    <g-image src="~/images/moticorp-logo.svg" alt="Moticorp Logo" class="w-4/5 md:w-full" />
                </g-link>
                <NavMenu></NavMenu>
            </div>
        </header>

        <main class="">
    		<slot />
        </main>
        
        <!-- <hr class="pr__vr__section"> -->
        <footer class="text-white">
            <div class="py-8 px-6">
                <div class="container flex flex-wrap justify-around md:justify-between mx-auto text-gray-700 text-sm">
                    <div class="">
                        <div class="">
                            <p>©{{ new Date().getFullYear() }} <g-link class="text-gray-400 hover:text-white" to="/">Moticorp, Inc</g-link> | All rights reserved.</p>
                        </div>
                    </div>
                    <div class="flex">
                        <a href="mailto:yosi@moticorp.com?Subject=Message%20from%20Moticorp.com" class="text-gray-400 hover:text-white ml-4">
                            <svg class="envelope-icon inline-block mb-1 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                            Email Us
                        </a>
                        <a href="/" class="text-gray-400 hover:text-white ml-4">
                            <svg class="facebook-icon inline-block mb-1 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                            Let's Be Social
                        </a>
                    </div>
                </div>
            </div>
        </footer>
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
