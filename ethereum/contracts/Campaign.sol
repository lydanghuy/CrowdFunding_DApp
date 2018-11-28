pragma solidity ^0.4.17;


contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum, string campaignName, string campaignDescription) public {
        address newCampaign = new Campaign(minimum, campaignName, campaignDescription, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals; 
    }
    
    Request[] public requests;
    address public creator;
    uint public MinimumContribution;
    mapping(address => bool) public contributors;
    string public CampaignName;
    string public CampaignDescription;
    uint public numberOfContributors;
    
    modifier restricted() {
        require(msg.sender == creator);
        
    //"_" is a special character that is used in functional modifiers.
    //It returns the flow of execution to the original function that is annotated.
        _;
    }
    
    function Campaign(uint minimumContributor, string campaignName, string campaignDescription, address manager) public {
        creator = manager;
        MinimumContribution = minimumContributor;
        CampaignName = campaignName;
        CampaignDescription = campaignDescription;
    }
    
    function donate() public payable {
        //if the contributor does not send the money > minContribution then the require statement
        //will thorw an error and immediately exit the function 
        require(msg.value > MinimumContribution);
        
        contributors[msg.sender] = true;
        numberOfContributors++;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
          
        });
        
        requests.push(newRequest);  
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
    
        require(contributors[msg.sender]);
        //A contributor can only approve a request one time.
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
        
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(request.approvalCount > (numberOfContributors / 2));
        require(!request.complete);
		
		request.recipient.transfer(request.value);
        request.complete = true;
        
    }
    
    function getCampaignDetails() public view returns(uint, string, string, uint, uint, uint, address) {
        return(
            MinimumContribution,
            CampaignName,
            CampaignDescription,
            this.balance, // this reference to contract itself
            requests.length,
            numberOfContributors,
            creator
        );
    }
    
    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}