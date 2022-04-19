const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    console.log("Compiling...")
    const runContractFactory = await hre.ethers.getContractFactory("RunLogger");
    console.log("Deploying...")
    const runContract = await runContractFactory.deploy();
    await runContract.deployed();

    console.log("Contract deployed to:", runContract.address);
    console.log("Contract deployed by:", owner.address);

    let distanceRun;
    distanceRun = await runContract.getRunDistance();

    let newRun = await runContract.addRun(10);
    await newRun.wait()

    distanceRun = await runContract.getRunDistance();

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
  runMain();