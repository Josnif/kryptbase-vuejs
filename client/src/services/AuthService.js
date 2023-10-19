import Web3 from "web3/dist/web3.min.js";
import Web3Modal from "web3modal";

const providerOptions = {};
const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
});

let provider = null;

export const resolve = (data, callback) => {
    const p = Promise.resolve(data).then(callback);
    return p;
};

export const authService = {
    login: async () => {
        if (window.ethereum) {
            try {
                provider = await web3Modal.connect();
                const web3 = new Web3(provider);
                const accounts = web3.eth.getAccounts();
    
                resolve(accounts, (item) => {
                    localStorage.setItem('AUTH_TOKEN', item[0]);
                    return item[0];
                });
    
                return Promise.resolve();
            } catch (error) {
                return Promise.reject(
                    new Error(
                        "Connection failed: " + error
                    )
                )
            }
        } else {
            return Promise.reject(
                new Error(
                    "No Ethereum wallet found. Please install metamask to continue."
                )
            )
        }
    },
    refreshAccount: async () => {
        const data = {};
        if (window.ethereum) {
            try {
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();

                if (accounts && accounts.length > 0) {
                    const acct = resolve(accounts, (item) => {
                        localStorage.setItem('AUTH_TOKEN', item[0]);
                        return item[0];
                    });
                    return acct;
                } else {
                    return false;
                }
                
            } catch (error) {
                localStorage.removeItem('AUTH_TOKEN');
                return new Error(error);
            }

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
        if (provider && provider.disconnect) {
            await provider.disconnect;

            provider = null;
            await web3Modal.clearCachedProvider();

            return Promise.resolve();
        }
    },
    checkAuth: () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        if (token && token !== 'undefined' && typeof token !== 'undefined') {
            return true;
        } else {
            return false;
        }
    },
    checkPermission: async () => Promise.resolve(),
    getUser: async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        if (token) {
            const balance = await getAddressBalance(token);
            return Promise.resolve({
                address: token,
                balance: balance,
            });
        } else {
            return Promise.reject();
        }
    }
}

const getAddressBalance = async (address) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3(window.ethereum);
        web3.eth.getBalance(address, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(web3.utils.fromWei(result, 'ether'));
            }
        })
    });
}