const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const provider =  new HDWalletProvider(
    'call glow acoustic vintage front ring trade assist shuffle mimic volume reject'
    , 'https://rinkeby.infura.io/v3/d093478e5c2d4dd189d95a6f937386bb'
);
const web3 = new Web3(provider);

const deploy = async () => {

const accounts = await web3.eth.getAccounts();

console.log('Attempting to deploy fom account', accounts[0]);
const result = await new web3.eth.Contract(JSON.parse(interface))
.deploy({data: '0x' + bytecode,arguments:['Hi there!'] })
.send({gas: '1000000', from: accounts[0]});
console.log('Contract deployed to', result.options.address)
};
deploy();