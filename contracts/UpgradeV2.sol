pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

import "../node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Upgrade is Initializable, ERC20Upgradeable{
    function initialize(address admin) public virtual initializer{
        __ERC20_init("Upgrade", "UPG");
        _mint(admin,10000000 * 10 ** decimals());
    }

    function mint(address account, uint256 amount) internal virtual {
       
        _mint(account, amount);

    }

    function burn(address account, uint256 amount) internal virtual {
        _burn(account, amount);
    }

    

    



}