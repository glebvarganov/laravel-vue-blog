<template>
    <header class="border-b border-gray-400">
        <div id="header-container" class="container mx-auto flex flex-row justify-between items-center py-8">

            <div id="logo" class="text-2xl font-black text-red-500">
                <router-link to="/">Webgleb.ru</router-link>
            </div>

            <ul id="main-navigation" class="flex flex-row">
                <li class="ml-3">
                    <router-link to="/">Главная</router-link>
                </li>
                <li class="ml-3">
                    <router-link to="/test">Test</router-link>
                </li>
                <li class="ml-3">
                    <router-link :to="{ name: 'blog' }">Блог</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

</style>
