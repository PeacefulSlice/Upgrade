pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "../node_modules/@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
// import "../node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "../node_modules/@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";


 contract Upgrade is Initializable, ERC20Upgradeable{
    using SafeMathUpgradeable for uint256;

    mapping (address => uint256) private _balances;

    mapping (address => mapping (address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;
    uint8 private _decimals;

    function initialize() public initializer{
        // __Context_init_unchained();
        __ERC20_init("Upgrade", "UPG");
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function transfer(address recipient, uint256 amount) public virtual override returns(bool) {
        _transfer(msg.sender,recipient, amount);
        return true;
    }

    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

    }
 
    function __ERC20_init_unchained(string memory name, string memory symbol ) internal initializer{
        _name = name;
        _symbol = symbol;
        _decimals = 18;

    }

    // function name() public view returns (string memory) {
    //     return _name;
    // }

  
    // function symbol() public view returns (string memory) {
    //     return _symbol;
    // }


    
}