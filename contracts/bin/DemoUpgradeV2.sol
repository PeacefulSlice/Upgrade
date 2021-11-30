// pragma solidity ^0.8.0;

// import "../node_modules/@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
// import "../node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

// import "../node_modules/@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
// // import "../node_modules/@openzeppelin/contratcs-upgradeable/";
// import "../node_modules/@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
// import "../node_modules/@openzeppelin/contracts-upgradeable/metatx/ERC2771ContextUpgradeable.sol";
// contract UpgradeV2 is Initializable, AccessControlUpgradeable, ERC2771ContextUpgradeable{
//     using SafeERC20Upgradeable for IERC20Upgradeable;

//     IERC20Upgradeable public token;
//     // function initialize(address admin) public virtual initializer{
//     //     __ERC20_init("Upgradev2", "UPG2");
//     //     _mint(admin,10000000 * 10 ** decimals());
//     //     _setupRole(DEFAULT_ADMIN_ROLE, admin);
//     // }
//     mapping(address => uint256) private _balances;

//     mapping(address => mapping(address => uint256)) private _allowances;

//     uint256 private _totalSupply;
//     address public tokenX;
//     address public tokenUFI;

//     address public beneficiary;
//     mapping(address => bool) isBlacklisted;
//     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
//     bytes32 public constant WHITELISTED_ROLE = keccak256("WHITELISTED_ROLE");


//     function _msgSender() internal override(ContextUpgradeable, ERC2771ContextUpgradeable) view returns (address) {
//         return ERC2771ContextUpgradeable._msgSender();
//     }
//     function _msgData() internal override(ContextUpgradeable, ERC2771ContextUpgradeable) view returns (bytes calldata) {
//         return ERC2771ContextUpgradeable._msgData();
//     }
//     function initialize(
//         address _tokenX,
//         address _tokenUFI
        
//         ) public initializer{
//         __Context_init_unchained();

//         tokenX = _tokenX;
//         tokenUFI = _tokenUFI;

//         // beneficiary = admin;
//         // _setupRole(DEFAULT_ADMIN_ROLE, admin);
//         // __ERC20_init("Upgrade", "UPG");
//         // _mint(admin,10000000 * 10 ** decimals());
//     }

//     function mint(address account, uint256 amount) external virtual {
//     //    require(!isBlacklisted[account],"account is blacklisted");
//         // require(hasRole(MINTER_ROLE,msg.sender),"caller is not a minter");
//         _totalSupply += amount;
//         _balances[account] += amount;
        

//     }
// // 0xC0Fcc51298576556306FAF8816860FbDda5664cc
//     function burn(address account, uint256 amount) internal virtual {
//         uint256 accountBalance = _balances[account];
//         require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
//         unchecked {
//             _balances[account] = accountBalance - amount;
//         }
//         _totalSupply -= amount;
//     } 

//     function blacklist(address account) public {
//         require(!isBlacklisted[account],"account already blacklisted");
//         // require(hasRole(WHITELISTED_ROLE,msg.sender),"caller is lack of rights");
//         isBlacklisted[account] = true;

//     }

//     function removeFromBlacklist(address account)public{
//         require(isBlacklisted[account],"account already whitelisted");
//         // require(hasRole(WHITELISTED_ROLE,msg.sender),"caller is lack of rights");
//         isBlacklisted[account] = false;
//     }

//     function transfer(address recipient, uint256 amount) external returns (bool){
//         require(!isBlacklisted[recipient],"REcipient is blacklisted");
//         token.transfer(recipient,amount);
//     }

     

    
//     // uint[45] private __gap;


// }