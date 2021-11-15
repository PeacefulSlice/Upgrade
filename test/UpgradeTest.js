const Upgrade = artifacts.require('Upgrade');
const { expect } = require('chai');
// const {deployProxy} = require('@openzeppelin/truffle-upgrades');

contract('Upgrade',() => {
    it('should deploy smart contract properly', async() => {
        const upgrade = await Upgrade.deployed();
        console.log(upgrade.address);
        assert(upgrade.address != '');
    })
});

// async function main() {
//     const Upgrade = await ethers.getContractFactory("Upgrade");
  
//     const mc = await upgrades.deployProxy(Upgrade);
  
//     await mc.deployed();
//     console.log("Upgrade deployed to:", mc.address);
//   }
  
//   main();
it('works before and after upgrading', async function () {
  const instance = await upgrades.deployProxy(Box, [42]);
  assert.strictEqual(await instance.retrieve(), 42);
  
  await upgrades.upgradeProxy(instance.address, BoxV2);
  assert.strictEqual(await instance.retrieve(), 42);
});
