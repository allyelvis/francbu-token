const { ethers } = require("hardhat");

async function main() {
  const tokenAddress = "0xYourDeployedTokenAddress"; // replace with actual address
  const [deployer] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("FrancBU");
  const token = Token.attach(tokenAddress);

  const recipient = "0xYourRecipientAddress"; // replace
  const amount = ethers.utils.parseUnits("1000", 18); // 1000 FBU

  const tx = await token.mint(recipient, amount);
  await tx.wait();
  console.log(`Minted 1000 FBU to ${recipient}`);
}
main().catch(console.error);
