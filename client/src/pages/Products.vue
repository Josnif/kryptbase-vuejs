<template>
    <div class="w-full bg-white p-12">
        <div class="header flex items-end justify-between mb-12">
            <div class="title">
                <p class="text-4xl font-bold text-gray-800 mb-4">
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
        <ProductCard />
    </div>
</template>

<script>
    import ProductCard from '../components/Partials/ProductCard.vue'

    export default {
        components: {
            ProductCard
        },
        setup() {

        }
    }

</script>