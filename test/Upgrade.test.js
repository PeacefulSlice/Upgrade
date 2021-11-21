// const {
   
//     constants,
//     expectEvent,
//     expectRevert
// } = require('@openzeppelin/test-helpers');
// const web3 = require("web3");
// const BN  = web3.utils.BN;

// function toBN(number){
//     return web3.utils.toBN(number);
// }

// const Upgrade = artifacts.require('Upgrade');
// const PProxy = artifacts.require('PProxy');
// const PProxyAdmin = artifacts.require('PProxyAdmin');


// contract('Upgrade', (accounts) => {
//     const decimals = toBN(10).pow(toBN(18));
    
//     let admin = accounts[0];
//     let upgrade;
    

//     before( async () => {
//         // await PProxyAdmin.new().then(instance => proxyAdmin = instance);
//         // await Upgrade.new().then(instance => upgrade = instance);
//         // await PProxy.new(upgrade.address, proxyAdmin.address, web3.utils.hexToBytes('0x')).then(instance=> proxyInstance = instance);

//         // upgrade = await Upgrade.at(masterCopy.address);
        
        
//         // let ProxyAdmin = await PProxyAdmin.at("");
//         let upgrade = await Upgrade.at("0x13DD7B89226BA2C64837D15A203e0C2a5F01E97f");
//         await upgrade.initialize(admin)


//     });

//     it ('works', async () => {
//         let recipient = accounts[1];
//         let someBalance = toBN(10);
//         await upgrade.increaseAllowance(recipient, someBalance, {from: admin})
//         await upgrade.transferFrom(admin, recipient, someBalance, {from: recipient});

//     });

   

// });