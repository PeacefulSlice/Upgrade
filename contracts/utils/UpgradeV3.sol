//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../../node_modules/@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "../../node_modules/@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

import "../../node_modules/@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "./Breaking.sol";

contract UpgradeV3 is  Initializable, ERC20Upgradeable,AccessControlUpgradeable, PausableUpgradeable, Breaking{    
    mapping(address => bool) isBlacklisted;
//   address public user2;
    // address public adminhead;
    address public user2; 
    address public user1;
    address public adminhead;
    
    
    // string  public value;
    
    // address public user2;
    
    
    
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant WHITELISTED_ROLE = keccak256("WHITELISTED_ROLE");

    function initialize(address admin) public virtual initializer {
        __ERC20_init("Upgrade", "UPG");
        _mint(admin,10000000 * 10 ** decimals());
        setAdmin(admin);
        _setupRole(DEFAULT_ADMIN_ROLE, getAdmin());
        
        __Pausable_init();
    }

    function mint(address account, uint256 amount) external virtual whenNotPaused {
        require(hasRole(MINTER_ROLE,msg.sender),"caller is not a minter");
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) internal virtual {
        _burn(account, amount);
    } 

    function blacklist(address account) public  {
        require(!isBlacklisted[account],"account already blacklisted");
        require(hasRole(WHITELISTED_ROLE,msg.sender),"caller is lack of rights");
        isBlacklisted[account] = true;
    }

    function removeFromBlacklist(address account)public {
        require(isBlacklisted[account],"account already whitelisted");
        require(hasRole(WHITELISTED_ROLE,msg.sender),"caller is lack of rights");
        isBlacklisted[account] = false;
        
    }

    function transfer(address recipient, uint256 amount) public virtual whenNotPaused override returns (bool) {
        require(!isBlacklisted[recipient],"REcipient is blacklisted");
        transfer(recipient,amount);
    }

    function pause() external{
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender),"caller is not an admin");
        _pause();
    }

    function unpause() external{
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender),"caller is not an admin");
        _unpause();
    }
    function setAdmin(address user) public{
       _setupRole(DEFAULT_ADMIN_ROLE, user);
       adminhead = user;
    }
   
    function getAdmin() public view returns (address){
        return adminhead;
    }
    // function setValue(string memory _value) public{
    //    value = _value;
    // }
   
    // function getValue() public view returns (string memory){
    //     return value;
    // }
    function setUser1(address  user) public{
       user1 = user;
    }
   
    function getUser1() public view returns (address){
        return user1;
    }
    function setUser2(address  user) public{
       user2 = user;
    }
   
    function getUser2() public view returns (address){
        return user2;
    }
//     uint256[50] private __gap;
}