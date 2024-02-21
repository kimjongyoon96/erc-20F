import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
// const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    sources: "./contracts",
  },
};

export default config;
