import Web3 from "web3";
import Web3Modal from "web3modal";

// import { getAddressBalance } from "../Utils"

const providerOptions = {};
const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
});

let provider = null;

export const authService = {
    login: async () => {
        if (window.ethereum) {
            provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const accounts = web3.eth.getAccounts();
            localStorage.setItem('AUTH_TOKEN', accounts[0]);

            return Promise.resolve()
        } else {
            return Promise.reject(
                new Error(
                    "No Ethereum wallet found. Please install metamask to continue."
                )
            )
        }
    },
    logout: async () => {
        localStorage.removeItem('AUTH_TOKEN');
        if (provider && provider.close) {
            await provider.close;

            provider = null;
            await web3Modal.clearCachedProvider();

            return Promise.resolve();
        }
    },
    checkAuth: () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        if (token) {
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    },
    checkPermission: async () => Promise.resolve(),
    getUser: async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        if (token) {
            // const balance = await getAddressBalance(token);
            return Promise.resolve({
                address: token,
                // balance: balance,
            })
        } else {
            return Promise.reject();
        }
    }
}