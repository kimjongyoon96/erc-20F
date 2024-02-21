import { ethers } from "hardhat";

async function karinaDeploy() {
  const MyToken = await ethers.getContractFactory("myKarina");
  const myToken = await MyToken.deploy("myKarina", "aespa");

  console.log(myToken);
}

karinaDeploy();
