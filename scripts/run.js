const { ethers } = require("hardhat");

async function main() {
    const [owner, randoAddress] = await ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to: ", waveContract.address);
    console.log("Contract deployed by: ", owner.address);
    //console.log("Account Balance: ", owner.gasPrice);


    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTkn = await waveContract.wave();
    await waveTkn.wait();

    waveCount = await waveContract.getTotalWaves();

    waveTkn = await waveContract.connect(randoAddress).wave();
    await waveTkn.wait();

    waveCount = await waveContract.getTotalWaves();
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
}) ;