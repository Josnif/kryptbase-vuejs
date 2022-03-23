<template>
    
    <div class="w-full p-4">
        <div class="card flex flex-col justify-center p-10 dark:bg-gray-800 bg-white rounded-lg shadow-2xl">
            <div class="prod-title">
                <p class="text-2xl dark:text-white uppercase text-gray-900 font-bold">
                    {{item.name}}
                </p>
                <p class="uppercase text-sm text-gray-400 dark:text-white">
                    {{item.description}}
                </p>
            </div>
            <div class="prod-img my-4">
                <img :src="getImagePath" class="w-full rounded-sm object-cover object-center"/>
            </div>
            <div class="prod-info grid gap-10">
                <!-- <div>
                    <ul class="flex flex-row justify-center items-center">
                        <li class="mr-4 last:mr-0">
                            <span class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full">
                                </a>
                            </span>
                        </li>
                        <li class="mr-4 last:mr-0">
                            <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full">
                                </a>
                            </span>
                        </li>
                        <li class="mr-4 last:mr-0">
                            <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full">
                                </a>
                            </span>
                        </li>
                        <li class="mr-4 last:mr-0">
                            <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full">
                                </a>
                            </span>
                        </li>
                    </ul>
                </div> -->
                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    <p class="font-bold text-xl dark:text-white">
                        {{item.price}} ETH
                    </p>
                    <button @click="addToCart" class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 dark:text-white hover:text-white border-2 border-gray-900 focus:outline-none">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
        id: {
            type: Number,
        }
    },
    setup(props) {
        const store = useStore();
        const getImagePath = computed(() => {
            return `assets/images/${props.item.image}`;
        });

        const addToCart = () => {
            store.commit('addCart', [props.item.name, props.id])
        }

        return { 
            getImagePath, addToCart
        }
    },
}
</script>