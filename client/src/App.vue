<script setup>
import { Navbar, Footer } from './components'
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
<div class="min-h-screen">
  <!-- <Navbar v-if="!isHomepage" /> -->
  <router-view></router-view>
  <Footer />
</div>
</template>
