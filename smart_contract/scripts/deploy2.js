const main = async () => {

    // Deploy Payments.sol contract
    const Payments = await hre.ethers.getContractFactory("Payments");
    const payments = await Payments.deploy();

    await payments.deployed();

    console.log("Payments deployed to: ", payments.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();