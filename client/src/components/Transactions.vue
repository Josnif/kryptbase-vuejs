<template> 
  <div class="flex w-full items-center justify-center 2xl:px-20">
    <div class="flex flex-col md:p-12 py-12 px-4">
      <h3 v-if="currentAccount" class="dark:text-white text-center text-3xl my-2">Latest Transactions</h3>
      <h3 v-else class="dark:text-white text-center text-3xl my-2">Connect your accounts to see your transactions.</h3>
      <div v-if="transactions.length" className="flex flex-wrap items-center justify-center mt-10">
        <TransactionCard v-for="(transaction, index) in transactions" :key="index" :items="transactions" />
      </div>
      <div v-if="!transactions.length && currentAccount" class="items-center">
        <p class="dark:text-white">No transactions yet</p>
      </div>

    </div>
  </div>
</template>

<script>
import TransactionCard from './Partials/TransactionCard.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
export default {
  components: {
    TransactionCard,
  },
  setup() {
    const store = useStore();
    const currentAccount = computed(() => store.state.account.address);
    const transactions = ref([]);


    return {
      currentAccount, transactions
    }
  },
}
</script>