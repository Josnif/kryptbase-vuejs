// import Web3 from "web3";

// const web3 = new Web3(window.ethereum);

export const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length-4)}`;

export const addressLink = (address) => `https://ropsten.etherscan.io/address/${address}`;

// export const getAddressBalance = async (address) => {
//     return new Promise((resolve, reject) => {
//         web3.eth.getBalance(address, (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(web3.utils.fromWei(result, 'ether'));
//             }
//         })
//     })
// }