// const { network } = require("hardhat");

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainID: 1337,
    },
  },
};
