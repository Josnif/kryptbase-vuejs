<template>
    <div class="w-full bg-white p-12">
        <div class="header flex items-end justify-between mb-12">
            <div class="title">
                <p class="text-4xl font-bold dark:text-white text-gray-800 mb-4">
                    Shop
                </p>
            </div>
            <div class="text-end">
                <p class="">
                    <router-link to="">Home</router-link>
                    / Products
                </p>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            <ProductCard v-for="(product, index) in store.state.products.items" :key="index" :item="product" :id="index" />
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex'
    import ProductCard from '../components/Partials/ProductCard.vue'
    

    export default {
        components: {
            ProductCard
        },
        setup() {
            const store = useStore();


            return { 
                store, 
            }
        }
    }

</script>