const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getaSigners();

    console.log("deploying contract with account: ", deployer.address);

    console.log("account balance: ", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("WavePortal");
    const token = await Token.deploy();

    console.log("wave portal: ", token.address);
}