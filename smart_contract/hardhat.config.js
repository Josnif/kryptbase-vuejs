require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const API_KEY = process.env.API_KEY;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  }
};