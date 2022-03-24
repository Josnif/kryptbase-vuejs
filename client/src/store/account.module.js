import { authService } from "../services/AuthService";
const state = {
    address: '',
    isLoggedIn: false,
    user: {},
}

const mutations = {
    setAccount(state) {
        state.isLoggedIn = true;
        state.address = localStorage.getItem('AUTH_TOKEN');
    },
    setUser(state, payload) {
        state.user = payload;
    },
    logout(state) {
        state.isLoggedIn = false;
        state.address = '';
        state.user = {}
    }
}

const actions = {
    setAccount(context) {
        context.commit('setAccount');
        context.dispatch('getUser');
    },
    async setLogin(context) {
        await authService.login();
        context.dispatch('refreshToken');
    },
    async refreshToken(context) {
        const check = authService.checkAuth();
        if (check) {
            await authService.refreshAccount();
            context.dispatch('setAccount');
        } else {
            context.commit('logout');
        }
    },
    async getUser(context) {
        const users = await authService.getUser();
        context.commit('setUser', users);
    },
    async logout(context) {
        await authService.logout();
        context.commit('logout');
    }
}

export const account = {
    state,
    mutations,
    actions
}