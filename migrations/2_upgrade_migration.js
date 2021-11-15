 const Upgrade = artifacts.require("Upgrade");

// module.exports = function (deployer) {
//   deployer.deploy(Upgrade);
// };
// migrations/NN_deploy_upgradeable_box.js
const { deployProxy } = require('@openzeppelin/truffle-upgrades');


module.exports = async function (deployer) {
  const instance = await deployProxy(Upgrade, [42], { deployer });
  console.log('Deployed', instance.address);
};