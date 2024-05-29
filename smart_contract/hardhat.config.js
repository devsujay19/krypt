require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  defaultNetworks: {
    ropsten: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/Hf5X_xXDfeDBzoTbldNsSTI2rbkzwA8i',
      accounts: [process.env.METAMASK_PRIVATE_KEY],
    },
  },
};