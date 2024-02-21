import { expect } from "chai";
import { ethers } from "hardhat";
import { MyKarina } from "../typechain-types";

describe("mykarina contract", function () {
  let myKarinaContract: MyKarina;
  let owner: any;
  let addr1: any;

  //* beforeEach : 각 테스트 실행 전에 "myKarina" 스마트 계약을 배포하고 초기 설정을 수행
  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();

    //* myKarina 스마트 계약 배포, 본격적인 배포는 scripts 폴더 안에서 진행해야 한다.

    const myKarinaFactory = await ethers.getContractFactory("MyKarina");
    myKarinaContract = (await myKarinaFactory.deploy(
      "KarinaToken",
      "KRN"
    )) as MyKarina;
    //* deployed() 함수가 안먹히는데, 이유를 파악해야 한다.
    await myKarinaContract;
  });
});
