// const Upgrade = artifacts.require('Upgrade');
// const  assert = require('chai').assert;
// // const {deployProxy} = require('@openzeppelin/truffle-upgrades');
// // const {ZERO_ADDRESS} = constants;
// const {time, expectRevert} = require('@openzeppelin/test-helpers');
// const web3 = require("web3");
// const BN = web3.utils.BN;

// function toBN(number){
//   return web3.utils.toBN(number);
// }


// contract('Upgrade',(accounts) => {



//   it ("should put 10000 UPG in the first account", ()=> 
//     Upgrade.deployed()
//     .then(instance => instance.getBalance.call(accounts[0]))
//     .then(balance => {
//       assert.equal(
//         balance.valueOf(),
//         10000,
//         "10000 wasn`t in the first account"
//       );
//     }));

//   // let admin = accounts[0];
//   // // const decimals = toBN(10).pow(toBN(18));
//   // // const name = 'Upgrade';
//   // // const symbol = 'UPG';
//   // console.log("Test: Admin: "+admin);

//   // let upgrade;

//   // before(async ()=> {
//   //   await Upgrade.deployed().then(instance=> upgrade = instance);
//   //   // console.log("Contract", instance.address);

//   // });
 


//   // it('transfers', async () =>{
//   //   await upgrade.getTokenBalance.sendTransaction(accounts[0]);
//   // })


//   // it('Upgrade Token', async ()=> {
//   //   let balance = await upgrade.balanceOf.call(admin);
//   //   console.log("balance",balance.toString());
//   //   expect(balance).to.be.eq.BN(toBN(100000000).mul(decimals));
//   // })



// })

// // describe('upgrades', () => {
// //   it('works', async  () => {
    
// //     const upgrade = await deployProxy(Upgrade,['Upgrade','UPG','10000']);
   
// //     // assert( upgrade.transfer('0xC0Fcc51298576556306FAF8816860FbDda5664cc',10)!='')
// //     const value  = await upgrade.name();

// //     assert.equal(value,'Upgrade');
    
// //   } );



// // });










// // const { expect } = require('chai');
// // const {deployProxy} = require('@openzeppelin/truffle-upgrades');

// // contract('Upgrade',() => {
// //     it('should deploy smart contract properly', async() => {
// //         const upgrade = await Upgrade.deployed();
// //         console.log(upgrade.address);
// //         assert(upgrade.address != '');
// //     })
// // });

// // async function main() {
// //     const Upgrade = await ethers.getContractFactory("Upgrade");
  
// //     const mc = await upgrades.deployProxy(Upgrade);
  
// //     await mc.deployed();
// //     console.log("Upgrade deployed to:", mc.address);
// //   }
  
// //   main();



// // it('works before and after upgrading', async function () {
// //   const instance = await upgrades.deployProxy(Box, [42]);
// //   assert.strictEqual(await instance.retrieve(), 42);
  
// //   await upgrades.upgradeProxy(instance.address, BoxV2);
// //   assert.strictEqual(await instance.retrieve(), 42);
// // });





// // const { deployProxy } = require('@openzeppelin/truffle-upgrades');

// // const Box = artifacts.require('Box');


// // describe('upgrades', () => {
// //   it('works', async () => {
// //     const upgrade = await deployProxy(Upgrade, [42]);
    
// //     assert.equal(value.toString(), '42');
// //   });
// // });