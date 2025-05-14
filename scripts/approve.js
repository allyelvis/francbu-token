const { ethers } = require("hardhat");

async function main() {
  const tokenAddress = "0xYourDeployedTokenAddress"; // replace
  const spender = "0xSpenderAddress"; // replace
  const amount = ethers.utils.parseUnits("500", 18);

  const Token = await ethers.getContractFactory("FrancBU");
  const token = Token.attach(tokenAddress);

  const tx = await token.approve(spender, amount);
  await tx.wait();
  console.log(`Approved 500 FBU to ${spender}`);
}
main().catch(console.error);
