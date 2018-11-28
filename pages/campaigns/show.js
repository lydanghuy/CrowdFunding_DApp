import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
// import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const details = await campaign.methods.getCampaignDetails().call();
        return {
            address: props.query.address,
            minimumContribution: details[0],
            campaignName: details[1],
            campaignDescription: details[2], 
            balance: details[3],
            requestsCount: details[4],
            numberOfContributors: details[5],
            creator: details[6]
        };
    }

    renderCampaignDetails() {
        const {
            campaignName,
            campaignDescription,
            balance,
            creator,
            minimumContribution,
            requestsCount,
            numberOfContributors
        } = this.props;

        const items = [
            
            {
                header: creator,
                meta: 'Address of Campaign\'s Creator',
                description:
                'The creator created this campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description:
                'You must contribute at least ' + minimumContribution + ' wei to become a contributor'
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description:
                'A request tries to withdraw money from the contract. Requests must be approved by contributors'
            },
            {
                header: numberOfContributors,
                meta: 'Number of Contributors',
                description:
                'Number of people who have already donated to this campaign'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description:
                'The balance is how much money this campaign has left to spend.'
            }
          ];
      
        return <Card.Group items={items} />;


    }

    render(){
        return (
            <Layout>
                <h3>Campaign Show</h3>
                {this.renderCampaignDetails()}

                {/* <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm address={this.props.address} />
                    </Grid.Column>
                </Grid.Row>
      
                <Grid.Row>
                    <Grid.Column>
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                            <a><Button primary>View Requests</Button></a>
                        </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid> */}
            </Layout>
          );
    }
}

export default CampaignShow;
