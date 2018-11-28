const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'jewel zoo draw cable viable cricket nuclear clarify erupt dutch pulp novel',
  'https://rinkeby.infura.io/v3/0830468add1e4fe3ab8b836b58ffaa8d'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode })
    .send({gas: '4700000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};

deploy();
