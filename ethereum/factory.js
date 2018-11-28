import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const CampaignFactoryInstance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface), '0x5BBF6B07A63A0763e4E265eDf5c924213F646512');

export default CampaignFactoryInstance;
