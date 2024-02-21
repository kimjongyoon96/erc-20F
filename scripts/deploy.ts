import { ethers } from "hardhat";

async function main() {
  //* 현재 타임스탬프를 계산하여, +60을 해서 잠금이 해제될 시간을 설정한다.
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  //* ethers의 parseEther 라이브러리를 사용하여 0.001 ETH=> wei 단위로 변환
  const lockedAmount = ethers.parseEther("0.001");
  //* [unlockTime] 생성자 인자로 전달, 변환된 값 만큼 이더를 첨부
  const lock = await ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  //* 실제는 deployed() 실행해야함, 래핑필여
  await lock.waitForDeployment();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
