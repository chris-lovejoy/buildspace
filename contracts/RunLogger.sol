// SPDX-License-Identifier: UNLICENSED
// A contract to enable people to log when they've done a run

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract RunLogger {
    uint distance_run_p1;
    uint distance_run_p2; 
    // TODO: consider storing separate run logs as merkle root

    constructor() {
        console.log("I am the run logger. I log runs. (I don't run logs.)");
    }

    function addRun(uint single_run_distance) public {
        console.log("%s has completed a run.", msg.sender);
        console.log("They ran %d miles.", single_run_distance);
        
        distance_run_p1 += single_run_distance;
        // TODO: modify to select appropriate player for distance to be added to
    }

    function getRunDistance() public view returns (uint) {
        // TODO: add ability to take in person Identifier
        console.log("Player 1 has run a total of %d miles", distance_run_p1);
        return distance_run_p1;
    }
}




