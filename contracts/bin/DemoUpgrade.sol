// pragma solidity ^0.8.0;

// import "../node_modules/@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
// import "../node_modules/@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
// import "../node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
// import "../node_modules/@openzeppelin/contracts-upgradeable/metatx/ERC2771ContextUpgradeable.sol";
// contract Upgrade is Initializable, ERC2771ContextUpgradeable{

//     using SafeERC20Upgradeable for IERC20Upgradeable;

//     mapping(address => uint256) private _balances;

//     mapping(address => mapping(address => uint256)) private _allowances;

//     uint256 private _totalSupply;

//     address public tokenX;
//     address public tokenUFI;

//     address public beneficiary;
//     // function _msgSender() internal override(ContextUpgradeable, ERC2771ContextUpgradeable) view returns (address) {
//     //     return ERC2771ContextUpgradeable._msgSender();
//     // }
//     // function _msgData() internal override(ContextUpgradeable, ERC2771ContextUpgradeable) view returns (bytes calldata) {
//     //     return ERC2771ContextUpgradeable._msgData();
//     // }
//     function initialize(address _tokenX, address _tokenUFI) public initializer{
//         __Context_init_unchained();

//         tokenX = _tokenX;
//         tokenUFI = _tokenUFI;

//         // beneficiary = admin;
//         // __ERC20_init("Upgrade", "UPG");
//         // _mint(admin,10000000 * 10 ** decimals());
//     }
// }