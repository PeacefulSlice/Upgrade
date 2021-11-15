const {expect} = require ('chai');
const {deployProxy} = require ('@openzeppelin/truffle-upgrades')
const Upgrade = artifacts.require('Upgrade');

async function main() {

    
}
main();



// async function main() {
//     const Upgrade = await ethers.getContractFactory("Upgrade");
  
//     const mc = await upgrades.deployProxy(Upgrade);
  
//     await mc.deployed();
//     console.log("Upgrade deployed to:", mc.address);
//   }
  
//   main();