<template>
    <div class="flex justify-center p-5 w-full">
        <div
            class="flex overflow-hidden flex-col justify-center items-center w-full max-w-sm h-80 bg-white rounded-lg shadow-lg"
        >
            <div class="flex items-center h-1/2">
                <template v-if="type == 'icon'">
                    <div
                        id="icon"
                        class="flex justify-center items-center w-28 h-28 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                    >
                        <i :class="logo" class="text-5xl text-white"></i>
                    </div>
                </template>
                <template v-else>
                    <img :src="logo" alt="Logo" class="object-cover w-full" />
                </template>
            </div>
            <div class="px-6 py-2">
                <div class="mb-2 text-xl font-bold">{{ title }}</div>
            </div>
            <div class="px-6 pt-4 pb-10">
                <a
                    :href="link"
                    class="inline-block px-12 py-4 font-bold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full hover:bg-blue-700 hover:bg-none focus:outline-none focus:shadow-outline"
                    type="button"
                >Go To Site</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'box',
    props: {
        title: {
            type: String,
            required: true,
        },
        logo: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'img',
        }
    },
};
</script>
