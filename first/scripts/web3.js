const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/dc04a514c25745ddb270fa826bac863c"));

const address = "0x4dF11a5fDf3ec1579be180d2f03411b97333eF3b";

const contract = require("../artifacts/contracts/SahabutActionToken.sol/SahabutActionToken.json");


console.log("Enter");
const myContract = new web3.eth.Contract(contract.abi, address)
myContract.methods.getMyAge().call().then(console.log)
