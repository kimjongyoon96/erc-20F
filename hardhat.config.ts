import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_ENDPOINT,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: process.env.ALCHEMY_MAINNET_ENDPOINT,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
