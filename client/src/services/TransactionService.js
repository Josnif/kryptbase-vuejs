import { transactionABI, transactionContractAddress } from '../Utils'
import { Web3 } from 'web3/dist/web3.min';

class TransactionService {
    constructor() {
        // connect to contract abi
        this.address = transactionContractAddress;
        this.abi = transactionABI;
    }

    async getContract() {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = await this.web3.eth.Contract(JSON.parse(this.abi), this.address);
            return contract;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getIfTransactionExist() {
        const contract = await this.getContract();
        await contract.methods.getTransactionCount().call();
    }

    async getAllTransactions() {
        const contract = await this.getContract();
        await contract.methods.getAllTransactions().call();
    }

    async sendTransaction(data = {}) {
        try {
            const contract = await this.getContract();
            await contract.methods.addToBlockchain(data.to, data.amount, data.message, data.keyword).call();
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }
}

export default TransactionService;