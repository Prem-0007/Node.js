const fs = require(`fs`);

fs.writeFileSync('bot.txt', 'Hello, akka! This is a file created using file system module in Node.js.');

fs.readFile('bot.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(`error reading file`, err);
    }
    console.log(`file data:`, data);

});