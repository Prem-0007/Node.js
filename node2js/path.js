const path= require('path');

console.log(path.parse(__filename));


console.log(path.join(__dirname, 'dir1', 'dir2', 'text.txt'));

console.log(path.resolve(__dirname, 'dir1', 'dir2', 'text.txt'));

const filePath = path.join(__dirname, 'dir1', 'dir2', 'text.txt');

console.log('File Path:', filePath);

const ext = path.extname(filePath);
console.log('File Extension:', ext);