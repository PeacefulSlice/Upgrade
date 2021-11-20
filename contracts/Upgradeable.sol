pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

import "../node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Upgrade is Initializable, ERC20Upgradeable{
    function initialize() public virtual initializer{
        __ERC20_init("Upgrade", "UPG");
        _mint(_msgSender(),10000000 * 10 ** decimals());
    }
}