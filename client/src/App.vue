<script setup>
import { HomeNav, Footer } from './components'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue';

const route = useRouter().currentRoute.value;
console.log(route);
// const isHomepage = ref(true);

// watch(
//   () => route,
//   (newValue, oldValue) => {
//     if (route.name == "home") isHomepage.value = true;
//     else isHomepage.value = false;
//     console.log(route.name);
//   },
//   { deep: true }
// )

</script>

<template>
<main class="dark:bg-gray-800 bg-white relative overflow-hidden min-h-screen">
    <HomeNav />
    <div class="dark:bg-gray-800 dark:text-white">
      <router-view></router-view>
    </div>
  <Footer />
</main>

</template>
