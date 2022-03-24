<template>
    <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div class="container mx-auto px-6 flex mf:flex-row flex-col items-start justify-between relative py-16">
            <div class="flex flex-1 justify-start flex-col relative z-20">
                <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Fast
                    <span class="text-5xl sm:text-7xl">
                        Secured
                    </span>
                </h1>
                <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                    Make secured easy and fast transactions across the world with Kryptbase.
                </p>
                <div class="flex mt-8">
                    <a v-if="!isLoggedIn" href="#" @click.prevent="connectWallet" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Connect Wallet
                    </a>
                    <router-link v-else :to="{ name: 'Products'}" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Make Purchase
                    </router-link>
                </div>
            </div>
            <div class="flex justify-end flex-col relative">
                <div class="p-3 justify-end items-center mx-auto flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card">
                    <div class="flex justify-between flex-col w-full h-full">
                        <div class="flex justify-between items-start">
                            <div class="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                <!-- <SiEthereum fontSize={21} color="#fff" /> -->
                            </div>
                            <!-- <BsInfoCircle fontSize={17} color="#fff" /> -->
                        </div>                        
                        <div>
                            <p v-if="address" class="dark:text-white font-light text-sm">
                                {{shortenAddress(address)}}
                            </p>
                            <p v-else class="dark:text-white font-light text-sm">
                                address
                            </p>
                            <p class="text-white font-semibold text-lg mt-1">
                                Ethereum
                            </p>
                        </div>
                    </div>    
                </div>

                <div class="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                    <input class="my-2 w-full rounded-sm p-2 outline-none dark:bg-transparent border-none text-sm dark:text-white white-glassmorphism" placeholder="Address To" name="addressTo" type="text" @change="handleChange(event)" />
                    <input class="my-2 w-full rounded-sm p-2 outline-none dark:bg-transparent border-none text-sm dark:text-white white-glassmorphism" placeholder="Amount (ETH)" name="amount" type="number" @change="handleChange(event)" />
                    <input class="my-2 w-full rounded-sm p-2 outline-none dark:bg-transparent border-none text-sm dark:text-white white-glassmorphism" placeholder="Keyword (Gif)" name="keyword" type="text" @change="handleChange(event)" />
                    <input class="my-2 w-full rounded-sm p-2 outline-none dark:bg-transparent border-none text-sm dark:text-white white-glassmorphism" placeholder="Enter Message" name="message" type="text" @change="handleChange(event)" />

                    <div class="h-[1px] w-full bg-gray-400 my-2"></div>
                    
                    <Loader v-if="isLoading" />
                
                    <button
                        v-if="!isLoading"
                        type="button"
                        onClick={handleSubmit}
                        class="dark:text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                    >
                        Send Now
                    </button>
                        
                </div>
            </div>
        </div>
    </div>
    <Services />
    <Transactions />


    <!-- <div class="gradient-bg-welcome">
        <Navbar />
        <Welcome />
    </div> -->
</template>

<script>
import { ref , computed} from 'vue'
import { useStore } from 'vuex'
import { Transactions, Services, Loader } from '../components'
import { useAddress } from '../Utils'

// const useAddress = shortenAddress();

export default {
    components: {
        Transactions, Services, Loader
    },
    setup() {
        const store = useStore();
        const shortenAddress = (address) => useAddress(address);
        const handleChange = (e) => {
            console.log(e);
        }
        const isLoading = store.state.isLoading;

        const connectWallet = () => {
            store.dispatch('setLogin');
        }
        const isLoggedIn = computed(() => store.state.account.isLoggedIn);
        const address = computed(() => store.state.account.address);

        return {
            handleChange, isLoading, connectWallet, isLoggedIn, address, shortenAddress,
        }
    }
}
</script>

<style>

</style>
