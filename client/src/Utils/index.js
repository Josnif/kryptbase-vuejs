export const useAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length-4)}`;

export const useAddressLink = (address) => `https://ropsten.etherscan.io/address/${address}`;