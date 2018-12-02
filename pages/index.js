import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';
import Campaign from '../ethereum/campaign';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaignAddresses = await factory.methods.getDeployedCampaigns().call();
        var campaignNameContainer = [];
        for(var index in campaignAddresses){
            var campaign = Campaign(campaignAddresses[index]);
            var campaignName = await campaign.methods.CampaignName().call();
            campaignNameContainer.push(campaignName);
        }
        return { 
            campaignAddresses, campaignNameContainer
        };
    }
    
    renderCampaigns() {
        const items = this.props.campaignAddresses.map((address, index)=> {
            return {
                header: this.props.campaignNameContainer[index],
                meta: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true
            }
    })

        return <Card.Group items={items} />;
    }

    render() {

        return (
            <Layout>
                <div>
                   
                    <h3>Open Campaigns</h3>
                    <Link route='/campaigns/new'>
                        <a><Button floated="right" content = "Create Campaign" icon = "add circle" primary/></a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        )
    }
}

export default CampaignIndex;