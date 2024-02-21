import { expect } from "chai";
import { ethers } from "hardhat";
import { KARINAToken } from "../typechain-types/contracts/myKarina.sol/KARINAToken";

describe("KARINAToken contract", function () {
  let karinaToken: KARINAToken;

  beforeEach(async function () {
    const karinaTokenFactory = await ethers.getContractFactory("KARINAToken");
    karinaToken = (await karinaTokenFactory.deploy(10000000)) as KARINAToken;
    await karinaToken.getDeployedCode();
  });

  it("Should do something", async function () {
    // 테스트 로직
  });
});
