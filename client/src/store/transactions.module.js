import TransactionService from "../services/TransactionService";

const transactionService = new TransactionService();
const state = {
    items: [],
}

const mutations = {
    setTransaction(state, payload) {
        state.items = payload;
    }
}

const actions = {
    async getAllTransactions(context) {
        const data = await transactionService.getAllTransactions();
        console.log(data);

        context.commit('setTransaction', data);        
    }
}

export const transactions = {
    state,
    mutations,
    actions
}