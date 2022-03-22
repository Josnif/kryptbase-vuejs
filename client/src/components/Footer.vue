<template>
    <div class="w-full flex md:justify-center justify-between items-center flex-col p-4">
        <div class="w-full flex sm:flex-row flex-col justify-between items-center my-4">
            <div class="flex flex-[0.5] justify-center items-center">
                <router-link to="/">
                    <img v-if="themeMode !== 'dark'" src="../assets/images/logo_dark.png" alt="logo" class="w-40 cursor-pointer" />
                    <img v-else src="../assets/images/logo_light.png" alt="logo" class="w-40 cursor-pointer" />
                </router-link>
            </div>
            <ul class="dark:text-white flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full ">
                <li v-for="item in menuItems" :key="item.id" class="mx-4 cursor-pointer" :class="item.class">
                    <router-link :to="'/'+item.link">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="flex justify-center items-center flex-col mt-5">
            <p class="dark:text-white text-sm text-center">Contact us at </p>
            <a href="mailto:jotwebstudio@gmail.com">
                <p class="dark:text-white text-sm text-center underline">jotwebstudio@gmail.com</p>
            </a>
            <p class="dark:text-white text-sm text-center mt-2">Made with Vue</p>
        </div>
        <div class="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "></div>
        <div class="sm:w-[90%] w-full flex justify-between items-center mt-3">
            <p class="dark:text-white text-sm text-center">@kryptobase 2022</p>
            <p class="dark:text-white text-sm text-center">All right reserved.</p>
        </div>
    </div>
                    
</template>

<script>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const themeMode = ref(localStorage.getItem('theme'));
        const menuItems = store.state.menuItems;

        // set a global state for the theme mode change instead of the line below
        setInterval(() => {
            themeMode.value = localStorage.getItem('theme');
        }, 1000);
        return { 
          menuItems, themeMode
        };
    },
}
</script>