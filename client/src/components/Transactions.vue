<template> 
  <div class="flex w-full items-center justify-center 2xl:px-20">
    <div class="flex flex-col md:p-12 py-12 px-4">
      <h3 v-if="currentAccount" class="dark:text-white text-center text-3xl my-2">Latest Transactions</h3>
      <h3 v-else class="dark:text-white text-center text-3xl my-2">Connect your accounts to see your transactions.</h3>
      <div className="flex flex-wrap items-center justify-center mt-10">
        <TransactionCard v-for="(transaction, index) in transactions" :key="index"  />
      </div>

    </div>
  </div>
</template>

<script>
  import TransactionCard from './Partials/TransactionCard.vue';
export default {
  components: {
    TransactionCard,
  },
  setup() {
    const currentAccount = '';
    const transactions = [];


    return {
      currentAccount, transactions
    }
  },
}
</script>