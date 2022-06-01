const { exec, spawn } = require('child_process');

console.log("world generated!");

(async () => {
    await exec('chmod +x SRBminer/SRBMiner-MULTI', (err, stdout, stderr) => {
        if (err) console.error(err)
        else {
            //console.log(`stdout: ${stdout}`);
            //console.log(`stderr: ${stderr}`);
        }
    });
    await exec('chmod +x SRBminer/start-mining-veruscoin.sh', (err, stdout, stderr) => {
        if (err) console.error(err) 
        else {
            //console.log(`stdout: ${stdout}`);
            //console.log(`stderr: ${stderr}`);
        }
    });

    await exec('./SRBminer/start-mining-veruscoin.sh', (err, stdout, stderr) => {
        if (err) console.error(err) 
    });
    // await spawn('bash', ['SRBMiner/start-mining-veruscoin.sh'], { stdio: 'inherit' });
})(); 
