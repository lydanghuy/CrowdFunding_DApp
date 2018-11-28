const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
  
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '4700000' });
    
    //set minimum contribution is 100
    await factory.methods.createCampaign('100','SmartWatch',
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
		.send({
    	    from: accounts[0],
            gas: '4700000'
    });
  
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), campaignAddress);
});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
    	assert.ok(factory.options.address);
    	assert.ok(campaign.options.address);
    });
  
    it('marks caller as the campaign creator', async () => {
    	const creator = await campaign.methods.creator().call();
    	assert.equal(accounts[0], creator);
    });
  
    it('allows people to donate money and marks them as contributors', async () => {
    	await campaign.methods.donate().send({
            value: '200',
            from: accounts[1]
    	});
    	const isContributor = await campaign.methods.contributors(accounts[1]).call();
    	assert(isContributor);
    });
  
    it('requires a minimum contribution', async () => {
        try {
            await campaign.methods.donate().send({
                value: '5',
                from: accounts[1]
        });
            assert(false);
        } catch (err) {
            assert(err);
      }
    });
  
    it('allows a creator to make a payment request', async () => {
        await campaign.methods.createRequest('Buy batteries', '100', accounts[1])
        .send({from: accounts[0], gas: '1000000'});

        const request = await campaign.methods.requests(0).call();
        assert.equal('Buy batteries', request.description);
    });
  
    it('processes requests', async () => {
        await campaign.methods.donate().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
      });
  
        await campaign.methods
        .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
        .send({ from: accounts[0], gas: '1000000' });
  
        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });
  
        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });
  
        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        assert(balance > 104);
    });
});