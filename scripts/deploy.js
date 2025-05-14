async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const Token = await ethers.getContractFactory("FrancBU");
  const token = await Token.deploy();
  await token.deployed();

  console.log("Franc BU Token deployed at:", token.address);
}
main().catch((error) => {
  console.error("Deployment failed:", error);
  process.exit(1);
});
