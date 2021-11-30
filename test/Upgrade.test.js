const { time, expectRevert } = require('@openzeppelin/test-helpers');
// const bigDecimal = require('js-big-decimal');
const web3 = require("web3");
const BN = web3.utils.BN;
const chai = require('chai');
const {expect,assert} = require('chai');


// const Upgrade= artifacts.require('Upgrade');
const PProxy = artifacts.require('PProxy');
const PProxyAdmin = artifacts.require('PProxyAdmin');
const UpgradeV2 = artifacts.require('UpgradeV2');
const UpgradeV3 = artifacts.require('UpgradeV3');
// const UpgradeV4 = artifacts.require('UpgradeV4');
const Support = artifacts.require('Support');

function toBN(number){
    return web3.utils.toBN(number);
}

contract ('UpgradeV2', (accounts) => {
    
    const decimals = toBN(10).pow(toBN(18));
    admin = accounts[0];
    user1 = accounts[1];
    user2 = accounts[2];
    console.log("account 0 = ", accounts[0]);
    console.log("account 1 = ", accounts[1]);
    console.log("account 2 = ", accounts[2]);
    

    let upgradeV2;
    let support;
    
    before(async ()=> {
        
        await Support.deployed().then(instance => support = instance);
        // console.log("TEST");
        // console.log("proxy instance at the begining = ", support.getUpgradeContract.call('proxy'));
        let proxyaddress = await support.getUpgradeContract.call('proxy');
        console.log("proxy instance = "+ proxyaddress);
        let address = await support.getUpgradeContract.call('proxyAdmin')
        console.log("proxy admin = "+ address);
        let proxyAdmin = await PProxyAdmin.at(address);
        let masterUpgradeV2Copy = await support.getUpgradeContract.call('master2');
        
        await proxyAdmin.upgrade.sendTransaction(proxyaddress,masterUpgradeV2Copy);
        upgradeV2 = await UpgradeV2.at(proxyaddress);


       
        
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
       
        



        // await upgradeV2.setValue('PRoxy');
        // let word = await upgradeV2.getValue();
        // console.log("WORD = " + word);




        let balance10before = await upgradeV2.balanceOf(accounts[0])
        let balance11before = await upgradeV2.balanceOf(accounts[1])

        console.log("balance 0 before transaction = ", balance10before.toString());
        console.log("balance 1 before transaction = ", balance11before.toString());
        
         await upgradeV2.setUser1(accounts[1]);
         let userd = await upgradeV2.getUser1();
         console.log("USER 1 = " + userd);
        console.log("user 1 correct = " + accounts[1])
        await upgradeV2.increaseAllowance(userd,someBalance);
        await upgradeV2.transferFrom(accounts[0],userd,someBalance);
        // let balanceafter = await upgradeV3.balanceOf.call(accounts[0]);
        let balance10after = await upgradeV2.balanceOf(accounts[0]);
        let balance11after = await upgradeV2.balanceOf(accounts[1]);
        expect(balance10before.sub(balance10after)).to.be.bignumber.equal(someBalance);
        expect(balance11before.add(balance11after)).to.be.bignumber.equal(someBalance);
        console.log("balance 0 after  transaction = ", balance10after.toString());
        console.log("balance 1 after  transaction = ", balance11after.toString());
        // await upgradeV2.transfer.sendTransaction(user1,someBalance,{from:accounts[0]})
        // await upgradeV2.transferFrom(admin,user2,someBalance)
        // await upgradeV2.grantRole(await upgradeV2.MINTER_ROLE.call(),accounts[2])
        // await upgradeV2.increaseAllowance(user2,someBalance);
        // await upgradeV2.mint(user2,someBalance);
        // await upgradeV2.transferFrom(user2,admin,someBalance)
        // Error during the transfer: vm exception while processing transaction revert
        // console.log("balance admin = ", upgradeV2.balanceOf(accounts[0,1,2]))

        // console.log("admin = ",admin.address)
        // console.log("admin = ",user1.address)
        // console.log("admin = ",user2.address)




        // await upgradeV2.blacklist(user1,{from:user2});
       

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



    it('UpgradeV3', async()=> {
        let masterUpgradeV3Copy = await support.getUpgradeContract.call('master3');
        let proxyaddress = await support.getUpgradeContract.call('proxy');
        console.log("proxy instance = "+ proxyaddress);
        let address = await support.getUpgradeContract.call('proxyAdmin')
        console.log("proxy Admin = "+ address);
        let proxyAdmin = await PProxyAdmin.at(address);
        await proxyAdmin.upgrade.sendTransaction(proxyaddress,masterUpgradeV3Copy);
        upgradeV3 = await UpgradeV3.at(proxyaddress);


        let someBalance = toBN(10).mul(decimals);
        await upgradeV3.increaseAllowance(accounts[0],someBalance);
        
        


        await upgradeV3.grantRole(await upgradeV3.MINTER_ROLE.call(),accounts[0],{from:accounts[0]})
        // await upgradeV2.grantRole(await upgradeV2.WHITELISTED_ROLE.call(),accounts[2])
        // param.sustring is not a function
        // await upgradeV3.unpause({from:accounts[0]});
        await upgradeV3.mint(admin,someBalance);



        console.log("SomeBalance = " + someBalance.toString());

        // let balancebefore = await upgradeV3.balanceOf.call(accounts[0]);
        let balance20before = await upgradeV3.balanceOf(accounts[0])
        let balance22before = await upgradeV3.balanceOf(accounts[2])
        console.log("balance 0 before transaction = ", balance20before.toString());
        console.log("balance 2 before transaction = ", balance22before.toString());
         await upgradeV3.setUser2(accounts[2]);
         let userr = await upgradeV3.getUser2();
         console.log("USER 2 = " + userr);
        console.log("user 2 correct = " + accounts[2])
        await upgradeV3.increaseAllowance(userr,someBalance);
        await upgradeV3.transferFrom(accounts[0],userr,someBalance);
        // let balanceafter = await upgradeV3.balanceOf.call(accounts[0]);

        let balance20after = await upgradeV3.balanceOf(accounts[0])
        let balance22after = await upgradeV3.balanceOf(accounts[2])
        console.log("balance 0 after transaction = ", balance20after.toString());
        console.log("balance 2 after transaction = ", balance22after.toString());





        await upgradeV3.mint(accounts[0],someBalance);
        let balance30before = await upgradeV3.balanceOf(accounts[0])
        let balance31before = await upgradeV3.balanceOf(accounts[1])
        console.log("balance 0 before transaction = ", balance30before.toString());
        console.log("balance 1 before transaction = ", balance31before.toString());
         await upgradeV3.setUser1(accounts[1]);
         let userf = await upgradeV3.getUser1();
         console.log("USER 1 = " + userf);
        console.log("user 1 correct = " + accounts[1])
        
        await upgradeV3.increaseAllowance(accounts[0],someBalance);
        await upgradeV3.transferFrom(accounts[0],userf,someBalance);
        // let balanceafter = await upgradeV3.balanceOf.call(accounts[0]);
        let balance30after = await upgradeV3.balanceOf(accounts[0])
        let balance31after = await upgradeV3.balanceOf(accounts[1])
        console.log("balance 0 after  transaction = ", balance30after.toString());
        console.log("balance 1 after  transaction = ", balance31after.toString());



        await upgradeV3.pause({from:accounts[0]});
        

    })
    


    // it('UgradeV4',async ()=> {
    //     let masterUpgradeV4Copy = await support.getUpgradeContract.call('master4');
    //     let proxyaddress = await support.getUpgradeContract.call('proxy');
    //     console.log("proxy instance = "+ proxyaddress);
    //     let address = await support.getUpgradeContract.call('proxyAdmin');
    //     console.log("proxy Admin = "+ address);
    //     let proxyAdmin = await PProxyAdmin.at(address);
    //     await proxyAdmin.upgrade.sendTransaction(proxyaddress,masterUpgradeV4Copy);
    //     upgradeV4 = await UpgradeV4.at(proxyaddress);

    //     let someBalance = toBN(10).mul(decimals);
    //     await upgradeV4.increaseAllowance(accounts[0],someBalance);
    //     await upgradeV4.increaseAllowance(accounts[0],someBalance);
    //     await upgradeV4.increaseAllowance(accounts[0],someBalance);
        

    //     await upgradeV4.setValue1('erghesr');
    //     await upgradeV4.setValue2('fwek');




    //     await upgradeV4.grantRole(await upgradeV4.MINTER_ROLE.call(),accounts[0]);
    //     await upgradeV4.mint(admin,someBalance);
        
    //     let balancebefore4 = await upgradeV4.balanceOf(accounts[0]);
    //     console.log("balance before transaction = "+balancebefore4.toString());
    //     await upgradeV4.setUser2(accounts[2]);
    //     let user4 = await upgradeV4.getUser2();
    //     console.log("USER 2 = " + user4);
    //     console.log("user 2 correct = " + accounts[2])
    //     await upgradeV4.transferFrom(accounts[0],user4,someBalance);
    //     let balanceafter4 = await upgradeV4.balanceOf(accounts[0])
    //     console.log("balance after transaction = ", balanceafter4.toString());
        

    // })
})