import Campaigns from './artifacts/contracts/Campaigns.sol/Campaigns.json'  // import the ABI code from this path

const campaignsContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"   // reference to the deployed contract for local node it will be this address.
                                                                      // if you deploy to a testnet you will get a new address after the contract is 

let ContractConfigs = {
    Address: campaignsContractAddress,
    CampaignsContractABI: Campaigns
}

export default ContractConfigs