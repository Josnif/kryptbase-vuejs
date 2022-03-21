const main = async () => {

    // Deploy Transactions.sol contract
    const Transactions = await hre.ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();

    await transactions.deployed();

    console.log("Transactions delployed to: ", transactions.address);

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