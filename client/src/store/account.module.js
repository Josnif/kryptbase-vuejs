import { authService } from "../services/AuthService";
const state = {
    address: '',
    isLoggedIn: false,
}

const mutations = {
    setAccount(state) {
        state.isLoggedIn = true;
        state.address = localStorage.getItem('AUTH_TOKEN');
    },
}

const actions = {
    setAccount() {
        commit('setAccount');
    },
    setLogin() {
        authService.login();
    },
}

export const account = {
    state,
    mutations,
    actions
}