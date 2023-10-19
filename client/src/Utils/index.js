import { abi as PaymentsAbi } from './Payment.json'
import {abi as TransactionAbi} from './Transactions.json'
export const useAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length-4)}`;

export const useAddressLink = (address) => `https://ropsten.etherscan.io/address/${address}`;

export const transactionABI = TransactionAbi;
export const transactionContractAddress = import.meta.env.VITE_TRANSACTION_CONTRACT_ADDRESS;

export const paymentABI = PaymentsAbi;
export const paymentContractAddress = import.meta.env.VITE_PAYMENT_CONTRACT_ADDRESS;