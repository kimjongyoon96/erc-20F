// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// contract myKarina is ERC20,
// AccessControl{

//     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
//     constructor(string memory name, string memory symbol) ERC20(name,symbol){
//        _grantRole(DEFAULT_ADMIN_ROLE,msg.sender);
//        _grantRole(MINTER_ROLE,msg.sender);

//         _mint(msg.sender,100000*10 **uint(decimals()));
//     }

//     function mint(address to, uint256 amount ) public onlyRole(MINTER_ROLE){
//         _mint(to,amount);
//     }
// }

contract KARINAToken is ERC20{
    constructor(uint56 initialSupply) ERC20("karian","aespa"){
      _mint(msg.sender,initialSupply);
    }
}