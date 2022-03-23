const state = {
    cart: [],
}

const mutations = {
    addCart(state, name, id) {
        const product = state.products.filter((item, index) => (index==id));
        console.log(id);
    }
}

const actions = {

}

export const cart = {
    state,
    mutations,
    actions
}