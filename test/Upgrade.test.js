const { time, expectRevert } = require('@openzeppelin/test-helpers');
// const bigDecimal = require('js-big-decimal');
const web3 = require("web3");
const BN = web3.utils.BN;
const chai = require('chai');
const {expect,assert} = require('chai');

// const Upgrade= artifacts.require('Upgrade');
// const PProxy = artifacts.require('PProxy');
// const PProxyAdmin = artifacts.require('PProxyAdmin');
const UpgradeV2 = artifacts.require('UpgradeV2');
const Support = artifacts.require('Support');

function toBN(number){
    return web3.utils.toBN(number);
}

contract ('UpgradeV2', (accounts) => {
    
    const decimals = toBN(10).pow(toBN(18));
    admin = accounts[0];
    user1 = accounts[1];
    user2 = accounts[2];

    let upgradeV2;
    let support;
    
    before(async ()=> {
        
        await Support.deployed().then(instance => support = instance);
        let contractAddress = await support.getUpgradeContract.call();
        upgradeV2 = await UpgradeV2.at(contractAddress);


       
        
        //    .then(instance => support = instance);
        // upgradeV2.initialize(admin);

    })
    
    it('transfers', async()=> {
        await upgradeV2.initialize(admin);
        let someBalance = toBN(10).mul(decimals);
        await upgradeV2.grantRole(await upgradeV2.MINTER_ROLE.call(),accounts[0])
        await upgradeV2.grantRole(await upgradeV2.WHITELISTED_ROLE.call(),accounts[2])
        // param.sustring is not a function
        await upgradeV2.mint(admin,someBalance);
        
        // Mint is not a function
        await upgradeV2.increaseAllowance(admin,someBalance);
        await upgradeV2.increaseAllowance(user1,someBalance);
        await upgradeV2.increaseAllowance(user2,someBalance);
        
        // await upgradeV2.transfer.sendTransaction(user1,someBalance,{from:accounts[0]})
        await upgradeV2.transferFrom(accounts[0],user1,someBalance)
        // Error during the transfer: vm exception while processing transaction revert
        console.log("balance admin = ", upgradeV2.balanceOf(accounts[0,1,2]))

        console.log("admin = ",admin.address)
        console.log("admin = ",user1.address)
        console.log("admin = ",user2.address)


        await upgradeV2.blacklist(user1,{from:user2});
        // await upgradeV2.transferFrom(accounts[0],user1,someBalance)
        // Работает!








        // Error: Returned error: VM Exception while processing transaction: revert caller is lack of rights -- Reason given: caller is lack of rights.
// Когда минтил с админа без роли минтера -  ошибка выскочила, 
// когда добавлял людей в черный список от лица админа без роли,
//  ошибка не выскочила, но выскочила, на второго пользователя
        // let someBalance = toBN(10).mul(decimals);
        // await upgradev2.increaseAllowance(admin,someBalance);
        // await upgradev2.transferFrom(admin,user1,someBalance);
    
    //         let balance = await upgradeV2.balanceOf.call(admin);
    //     // await upgradeV2.transfer.sendTransaction()
    //     expect(balance).to.be.eq.BN(toBN(100000000).mul(decimals))
    })
})