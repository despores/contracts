/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-ethers')
require('@nomicfoundation/hardhat-chai-matchers')
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
};

const GOERLI_PRIVATE_KEY = "4dbdd9721d3571e50c448ec710d220e1cee1663347edabf2041b918378dd1eea";
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/dc04a514c25745ddb270fa826bac863c`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
