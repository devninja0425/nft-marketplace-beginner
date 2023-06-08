/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    //  unused configuration commented out for now
    // mumbai: {
    //   // Infura
    //   url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
    //   accounts: [privateKey],
    // },
    // matic: {
    //   // Infura
    //   url: `https://polygon-mainnet.pinata.io/v3/${projectId}`,
    //   accounts: [privateKey],
    // },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
