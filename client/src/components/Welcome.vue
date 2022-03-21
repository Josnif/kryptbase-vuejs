<template>
<div class="flex w-full justify-center">
  <div class="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
    <div class="flex flex-1 justify-start flex-col mf:mr-10">
      <h1 class="text-3xl sm:text-5xl dark:text-white text-gradient py-1">
          Send Crypto <br /> across the world
      </h1>
      <p class="text-left mt-5 dark:text-white font-light md:w-9/12 w-11/12 text-base">
          Explore the crypto world. Buy and sell cryptocurrencies easily on Kryptbase.
      </p>

      <button
        type="button"
        class="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
      >
        <p class="text-white text-base font-semibold">Connect Wallet</p>
      </button>
      <div class="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
          <div class="rounded-tl-2xl" :class="commonStyles">
            Reliabilty 
          </div>
          <div :class="commonStyles">Security</div>
          <div class="sm:rounded-tr-2xl" :class="commonStyles">
            Ethereum 
          </div>
          <div class="sm:rounded-bl-2xl" :class="commonStyles">
            Web 3.0 
          </div>
          <div :class="commonStyles">Low Fees</div>
          <div class="rounded-br-2xl" :class="commonStyles">
            Blockchain 
          </div>
      </div>
    </div>
  </div>
</div>
    
</template>

<script>
export default {
  setup() {
    const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center dark:border-[0.5px] border-[0.2px] dark:border-gray-400 border-gray-900 text-sm dark:font-light dark:text-white";

    return {
      commonStyles, 
    }
  },
}
</script>
