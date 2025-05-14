const { ethers } = require("hardhat");

async function main() {
  const tokenAddress = "0xYourDeployedTokenAddress"; // replace
  const recipient = "0xRecipientAddress"; // replace
  const amount = ethers.utils.parseUnits("200", 18);

  const Token = await ethers.getContractFactory("FrancBU");
  const token = Token.attach(tokenAddress);

  const tx = await token.transfer(recipient, amount);
  await tx.wait();
  console.log(`Transferred 200 FBU to ${recipient}`);
}
main().catch(console.error);
