console.log(process.argv);
console.log(process.argv[3]);

// process.env
console.log(process.env.LOGNAME);

//pid
console.log(`Process ID: ${process.pid}`);

// cwd()
console.log(`Current working directory: ${process.cwd()}`);

// version and platform
console.log(`Node.js version: ${process.version}`);
console.log(`Platform: ${process.platform}`);

// title
console.log(`Process Title: ${process.title}`);

// mem usage
console.log('Memory Usage:', process.memoryUsage());

// uptime

console.log(`Process Uptime: ${process.uptime()} seconds`);

process.on('exit', (code) => {
    console.log(`About to exit with the code: ${code}`);
});

// exit
process.exit(0); // Exit with success code


console.log("bot from exit"); 
