// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Campaigns {
    struct Campaign {
        string name;
        string display;
        string website;
        string details;
        uint64 target;
    }

    Campaign[] public campaigns;

    constructor() { // contructor where data can be initialed. Set in the deploy.js script
        console.log("Deploying a Campaign contract\n");
    }

    function runCampaign(string memory _name, string memory _display, string memory _website, string memory _details, uint64 target) public {
        // console.log("Adding campaign '%s' : '%s' : '%s' : '%s'", _name, _display, _website, _details);
        campaigns.push(Campaign(_name, _display, _website, _details, target));
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        return campaigns;
    }

    // removes warnings
    fallback() external payable {

    }

    receive() external payable {

    }
    // address payable public owner;

    // event Withdrawal(uint amount, uint when);

    // constructor(uint _unlockTime) payable {
    //     require(
    //         block.timestamp < _unlockTime,
    //         "Unlock time should be in the future"
    //     );

    //     unlockTime = _unlockTime;
    //     owner = payable(msg.sender);
    // }

    // function withdraw() public {
    //     // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
    //     // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

    //     require(block.timestamp >= unlockTime, "You can't withdraw yet");
    //     require(msg.sender == owner, "You aren't the owner");

    //     emit Withdrawal(address(this).balance, block.timestamp);

    //     owner.transfer(address(this).balance);
    // }
}
