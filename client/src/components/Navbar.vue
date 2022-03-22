<template>
  <nav class="w-full flex md:justify-center justify-between items-center p-4">
    <div class="md:flex-[0.5] flex-initial justify-center items-center">
      <router-link to="/">
        <img v-if="themeMode !== 'dark'" src="../assets/images/logo_dark.png" alt="logo" class="w-40 cursor-pointer" />
        <img v-else src="../assets/images/logo_light.png" alt="logo" class="w-40 cursor-pointer" />
      </router-link>
    </div>
    <ul class="dark:text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
      <li v-for="item in menuItems" :key="item.id" class="mx-4 cursor-pointer" :class="item.class">
        <router-link :to="'/'+item.link">{{item.title}}</router-link>
      </li>
      <button @click="themeToggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">  
        <svg v-if="themeMode !== 'dark'" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        <svg v-else className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
      </button>
    </ul>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

export default {
    setup() {
        const themeMode = ref(localStorage.getItem('theme'));

        const themeToggle = () => {
          if (themeMode.value === 'dark') {
            themeMode.value = 'light';
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
          } else {
              themeMode.value = 'dark';
              window.localStorage.setItem('theme', 'dark');
              document.documentElement.classList.add('dark');
          }
        }

        const menuItems = [
          {
            id: 1,
            title: "Home",
            link: ""
          },
          {
            id: 2,
            title: "Products",
            link: "products"
          },
          {
            id: 3,
            title: "Contact",
            link: "contact"
          },
          {
            id: 4,
            title: "Tutorials",
            link: "tutorials"
          }
        ];

        onMounted(() => {
          if (typeof localStorage.getItem('theme') == 'object') {
            themeMode.value = 'dark';
            document.documentElement.classList.add('dark');
          } else if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              themeMode.value = 'dark';
              document.documentElement.classList.add('dark');
          } else {
              themeMode.value = 'light';
              document.documentElement.classList.remove('dark');
          }
        });
        return { 
          themeMode, themeToggle, menuItems
        };
    },
}
</script>

<style>

</style>