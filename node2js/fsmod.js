const fs = require('fs');

fs.readdir('./', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(files);
});


// const files = fs.readdirSync('./');
// console.log(files);


fs.readdir('./', (err, files) => {

    if (err) {
        console.log(err);
        return;
    }
    console.log(files);
    fs.stat('./text.txt', (err, stats) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stats);
        console.log('Is file:', stats.isFile());

        console.log('Is directory:', stats.isDirectory());
    });
});

// print text.txt file content

fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    fs.writeFile('./text.txt', 'Hello World', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('File written successfully');
        fs.appendFile('./text.txt', '\nThis is an appended text', (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('File appended successfully');
            fs.readFile('./text.txt', 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(data);
            });
        });
    });
});
