<template>
    <div class="flex flex-row items-center justify-start p-3 m-2 white-glassmorphism cursor-pointer hover:shadow-xl">
        <div :class="color" class="w-10 h-10 rounded-full flex justify-center items-center">
            {{icons}}
        </div>
        <div class="flex flex-1 flex-col ml-5">
            <h3 class="dark:text-white text-gray-700 mt-2 text-lg">{{title}}</h3>
            <p class="dark:text-white text-gray-700 mt-2 text-sm md:w-9/12">{{subtitle}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'title', 'icons', 'color', 'subtitle'
    ],
    setup() {
        
    },
}
</script>