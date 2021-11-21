const Upgrade = artifacts.require('Upgrade');
const PProxy = artifacts.require('PProxy');
const PProxyAdmin = artifacts.require('PProxyAdmin');
// const web3 = require("web3");
// const BN = web3.utils.BN;

// const {time} = require('@openzeppelin/test-helpers');


// function toBN(number){
//   return web3.utils.toBN(number);

// }


module.exports = async function(deployer, accounts){
  let admin = accounts[0];
  console.log("Deploy: Admin: "+admin);

  let upgrade;
    await deployer.deploy(Upgrade, admin)
    .then(function(){
        console.log("Upgrade instance: ", Upgrade.address);
        return Upgrade.at(Upgrade.address);
    }).then(function (instance){
        upgrade = instance; 
    });

    // let proxyAdmin;
    // await PProxyAdmin.new().then(upgrade => proxyAdmin = upgrade);
    // console.log("Proxy Admin: ",proxyAdmin.address);

    // await Upgrade.new().then(instance => masterUpgradeCopy = instance);
    // let proxyAdmin;
    // let upgrade;
    // let proxyInstance;
// **************************
    await PProxyAdmin.new().then(instance => proxyAdmin = instance);
    await Upgrade.new().then(instance => masterUpgradeCopy = instance);
    await PProxy.new(masterUpgradeCopy.address, proxyAdmin.address, web3.utils.hexToBytes('0x')).
        then(instance => proxyInstance = instance);
    



}
