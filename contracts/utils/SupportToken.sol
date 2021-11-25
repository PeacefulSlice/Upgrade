pragma solidity >= 0.8.0;

// import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Support{
    // address upgradeContract;
    mapping(string => address) internal contracts;
    constructor()  {
        
    }
    
    function setUpgradeContract(string  memory key,address _contract) public {
        // upgradeContract = _contract;
       
        contracts[key] = _contract;
    }

    function getUpgradeContract(string memory key) external view returns(address){
        // return upgradeContract;
        return contracts[key];
    }


}