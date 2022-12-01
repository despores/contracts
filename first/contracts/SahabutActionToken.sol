// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SahabutActionToken is ERC20, Ownable {
    constructor() ERC20("SahabutActionToken", "SAT") {
        _mint(msg.sender, 100000000 * 10**decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function getMyAge() public view returns (int64) {
        return 20;
    }
}
