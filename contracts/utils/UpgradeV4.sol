// pragma solidity ^0.8.0;

// import "../../node_modules/@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
// import "../../node_modules/@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
// import "../../node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
// import "../../node_modules/@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";

// contract UpgradeV4 is Initializable, ERC20Upgradeable,AccessControlUpgradeable, PausableUpgradeable{
//     mapping(address => bool) isBlacklisted;
//     string public value;
//     string public value1;
//     address public user2;
//     address public adminhead;
//     string public value2;
//     address public user1;
    
//     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
//     bytes32 public constant WHITELISTED_ROLE = keccak256("WHITELISTED_ROLE");

//     function initialize(address admin) public virtual initializer {
//         __ERC20_init("Upgradev2", "UPG2");
//         _mint(admin,10000000 * 10 ** decimals());
//         setAdmin(admin);
//         _setupRole(DEFAULT_ADMIN_ROLE, getAdmin());
        
//         __Pausable_init();
//     }

//     function mint(address account, uint256 amount) external virtual whenNotPaused {
//         require(hasRole(MINTER_ROLE,msg.sender),"caller is not a minter");
//         _mint(account, amount);
//     }

//     function burn(address account, uint256 amount) internal virtual {
//         _burn(account, amount);
//     } 

//     function blacklist(address account) public  {
//         require(!isBlacklisted[account],"account already blacklisted");
//         require(hasRole(WHITELISTED_ROLE,msg.sender),"caller is lack of rights");
//         isBlacklisted[account] = true;
//     }

//     function removeFromBlacklist(address account)public {
//         require(isBlacklisted[account],"account already whitelisted");
//         require(hasRole(WHITELISTED_ROLE,msg.sender),"caller is lack of rights");
//         isBlacklisted[account] = false;
        
//     }

//     function transfer(address recipient, uint256 amount) public virtual whenNotPaused override returns (bool) {
//         require(!isBlacklisted[recipient],"REcipient is blacklisted");
//         transfer(recipient,amount);
//     }

//     function pause() external{
//         require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender),"caller is not an admin");
//         _pause();
//     }

//     function unpause() external{
//         require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender),"caller is not an admin");
//         _unpause();
//     }
//     function setAdmin(address user) public{
//        _setupRole(DEFAULT_ADMIN_ROLE, user);
//        adminhead = user;
//     }
   
//     function getAdmin() public view returns (address){
//         return adminhead;
//     }
//     function setValue(string memory _value) public{
//        value = _value;
//     }
   
//     function getValue() public view returns (string memory){
//         return value;
//     }
//     function setUser1(address  user) public{
//        user1 = user;
//     }
   
//     function getUser1() public view returns (address){
//         return user1;
//     }
//     function setUser2(address  user) public{
//        user2 = user;
//     }
   
//     function getUser2() public view returns (address){
//         return user2;
//     }
//     function setValue1(string memory _value) public{
//        value1 = _value;
//     }
   
//     function getValue1() public view returns (string memory){
//         return value1;
//     }
//     function setValue2(string memory _value) public{
//        value2 = _value;
//     }
   
//     function getValue2() public view returns (string memory){
//         return value2;
//     }
//     // uint[45] private __gap;
// }