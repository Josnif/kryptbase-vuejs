<template>
  <div class="flex flex-1 dark:bg-[#181918] m-4
        2xl:min-w-[450px]
        2xl:max-w-[500px]    
        sm:min-w-[270px]
        sm:max-w-[300px] 
        shadow-xl
        flex-col p-3 rounded-md hover:shadow-2xl   
    ">
        <div class="flex flex-col items-center w-full mt-3">
            <div class="w-full mb-6 p-2">
                <a :href="addressLink(addressFrom)" target="_blank" rel="noopener noreferrer">
                    <p class="dark:text-white text-base">From: {shortenAddress(addressFrom)}</p>    
                </a> 
                <a :href="addressLink(addressFrom)" target="_blank" rel="noopener noreferrer">
                    <p class="dark:text-white text-base">To: {{shortenAddress(addressTo)}}</p>    
                </a> 
                <p class="dark:text-white text-base">Amount: {{amount}} ETH</p>
                
                <br v-if="message" />
                <p v-if="message" class="dark:text-white text-base">Message: {{message}}</p>


            </div>
            
            <img 
                :src="gifUrl || dummyGif"
                alt="gif"
                class="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
            />
            <div class="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                <p class="text-[#37c7da] font-bold">{{timestamp}}</p>
            </div>
        </div>

    </div>
</template>

<script setup>
    import { shortenAddress, addressLink } from '../../Utils'
    defineProps([
        'addressTo', 'addressFrom', 'amount', 'message', 'timestamp'
    ]);
    const gifUrl = '';
    const dummyGif = 'https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284';

</script>