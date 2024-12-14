<template>
    <div class="flex flex-col justify-center items-center pb-20 max-h-80 font-sans text-white bg-smanda h-fullw" id="Header">
        <h1 class="mb-4 text-4xl font-bold leading-tight text-center capitalize text-warning">
            SELAMAT DATANG
        </h1>
        <h2 class="mb-4 text-2xl font-bold leading-tight text-center">
            Di Layanan Portal SMA Negeri 2 Amlapura
        </h2>
        <p class="text-lg leading-relaxed text-center">
            Sistem Informasi Manajemen <br> SMA Negeri 2 Amlapura
        </p>
    </div>
    <div class="container mx-auto">
        <div id="content" class="grid grid-cols-1 px-8 -mt-24 min-h-screen lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2">
            <box v-for="(item, index) in items" :key="index"
                 :title="item.title" :logo="item.logo" :link="item.link" :type="item.type"
            />
        </div>
    </div>
    <footer class="p-4 pb-5 mt-8 text-center text-white bg-smanda font-body">
        <hr class="mb-5">
        &copy; 2024 SMA Negeri 2 Amlapura
    </footer>
</template>

<script>
import box from './components/box.vue';

export default {
    name: 'App',
    components: {
        box,
    },
    data() {
        return {
            items: []
        };
    },
    mounted() {
        fetch('/assets/data.json')
            .then(res => res.json())
            .then(data => this.items = data);
    }
};
</script>
