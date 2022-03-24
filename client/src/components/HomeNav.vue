<template>
  <header class="h-24 sm:h-32 flex items-center z-30 w-full">
        <div class="container mx-auto px-6 flex items-center justify-between">
            <div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
                Kryptbase
            </div>
            <div class="flex items-center">
                <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg mf:flex items-center hidden">
                    
                    <router-link class="py-2 px-6 flex" v-for="item in menuItems" :key="item.id" :to="'/'+item.link">{{item.title}}</router-link>
                    <a class="py-2 px-6 flex" v-if="isLoggedIn" @click.prevent="logout" href="#">Logout</a>

                    <button @click="themeToggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">  
                        <svg v-if="themeMode !== 'dark'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </button>
                </nav>
                <button @click="setToggleMenu" class="mf:hidden flex flex-col ml-4">
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                </button>

                <!-- Small screen menu  -->
                <ul v-if="toggleMenu"
                    class="z-50 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl mf:hidden list-none 
                    flex flex-col justify-start items-end rounded=md blue-glassmorphism dark:text-white gray-900 animate-slide-in"
                >
                    <button @click="setToggleMenu" class="mf:hidden flex w-full flex-col ml-4 mb-2">
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white rotate-45"></span>
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white -rotate-45"></span>
                    </button>
                    <li v-for="item in menuItems" :key="item.id" class="mx-4 cursor-pointer" :class="item.class">
                        <router-link :to="'/'+item.link">{{item.title}}</router-link>
                    </li>
                    
                    <button @click="themeToggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">  
                        <svg v-if="themeMode !== 'dark'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </button>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const themeMode = ref(localStorage.getItem('theme'));
        const toggleMenu = ref(false);
        const store = useStore();

        const isLoggedIn = computed(() => store.state.account.isLoggedIn);

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

        const menuItems = store.state.menuItems;

        const setToggleMenu = () => {
            toggleMenu.value = !toggleMenu.value;
        }

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

        const logout = () => {
            store.dispatch('logout')
        }
        return { 
          themeMode, themeToggle, menuItems, toggleMenu, setToggleMenu, isLoggedIn, logout
        };
    },
}
</script>

<style>

</style>