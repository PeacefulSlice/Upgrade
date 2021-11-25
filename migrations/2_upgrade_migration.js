const Upgrade = artifacts.require('Upgrade');
const PProxy = artifacts.require('PProxy');
const PProxyAdmin = artifacts.require('PProxyAdmin');
const UpgradeV2 = artifacts.require('UpgradeV2');
const Support = artifacts.require('Support');
// const web3 = require("web3");
// const BN = web3.utils.BN;
// const {time} = require('@openzeppelin/test-helpers');
// function toBN(number){
//   return web3.utils.toBN(number);
// }
module.exports = async function(deployer, accounts){
  let admin = accounts[0];
  console.log("Deploy: Admin: "+admin);

  let support;
    await deployer.deploy(Support)
    .then(function(){
        console.log("Support contract = ", Support.address);
        return Support.at(Support.address);
    }).then(function (instance){
        support = instance; 
    });  
// let upgrade = await Upgrade.at("0x13DD7B89226BA2C64837D15A203e0C2a5F01E97f"); первый закомментированный, в день когда впервые задеплоился и протестировался контракт апгред вершн1


    // let proxyAdmin;
    // await PProxyAdmin.new().then(upgrade => proxyAdmin = upgrade);
    // console.log("Proxy Admin: ",proxyAdmin.address);

    // await Upgrade.new().then(instance => masterUpgradeCopy = instance);
    // let proxyAdmin;
    // let upgrade;
    // let proxyInstance;
    let proxyInstance;
    await PProxyAdmin.new().then(instance => proxyAdmin = instance);
    await Upgrade.new().then(instance => masterUpgradeCopy = instance);
    await PProxy.new(masterUpgradeCopy.address, proxyAdmin.address, web3.utils.hexToBytes('0x')).
        then(instance => proxyInstance = instance);
    console.log("Proxy instance = ", proxyInstance.address);
    console.log("Proxy Admin = ", proxyAdmin.address);
    console.log("Mastercopy address = ", masterUpgradeCopy.address)
// **************************
                    //  let upgradeTokenAddress = '0x81228003BfDF158a7E9fCd43a6A55f2087859DBD';
    // 0xd9145CCE52D386f254917e481eB44e9943F39138 первый тест на ремиксе
    // 0x8f16fe8c0F59Fd3A3D43367bE6A1A07A491ceD72 сегодня показался на тестовой миграции
    // 0x24011A9d64c4F7B9a59009155A9E7C5956eE8278 Прокси админ
                        //   let upgradev1  = await Upgrade.at(upgradeTokenAddress);

                        //  console.log("Address of first Token" + upgradev1.address);

                            //  let proxyAdmin = await ProxyAdmin.at('0x2ad8D934A3322238bC616c9E871a638086bFBa04');
    // await PProxyAdmin.new().then(instance => proxyAdmin = instance);
    console.log("Proxy admin: ", proxyAdmin.address);

    let masterUpgradeV2Copy;
    await UpgradeV2.new().then(instance => masterUpgradeV2Copy = instance);
    console.log("Upgrade master copy" , masterUpgradeV2Copy.address);

    

    await proxyAdmin.upgrade.sendTransaction(proxyInstance.address,masterUpgradeV2Copy.address);

    upgrade = await UpgradeV2.at(proxyInstance.address);

    await support.setUpgradeContract.sendTransaction(proxyInstance.address);

    

    // let upgradev2;
    // await PProxy.new(masterUpgradeCopy.address,proxyAdmin.address,web3.utils.hexToBytes('0x')).
    //     then(function(instance){
    //         return Upgradev2.at(instance.address);

    //     }).then(instance => upgradev2 = instance);
    //  console.log("UpgradeV2 instance =", upgradev2.instance);













// *****************
    
    
    // await Upgradev2.new().then(instance => masterUpgradeV2Copy= instance)
    // await proxyAdmin.upgrade(proxyInstance.address,masterUpgradeV2Copy.address)
    // upgrade = await Upgradev2.at(proxyInstance.address);

    












    // DO NOT DISTURB 
    // Upgrade First Deploying
//     Upgrade instance:  0x24011A9d64c4F7B9a59009155A9E7C5956eE8278
// Proxy instance =  0x81228003BfDF158a7E9fCd43a6A55f2087859DBD
// Proxy Admin =  0x2ad8D934A3322238bC616c9E871a638086bFBa04
// ProxyInstance =  0x81228003BfDF158a7E9fCd43a6A55f2087859DBD


}
