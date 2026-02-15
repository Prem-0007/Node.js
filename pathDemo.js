import path from 'path';
import url from 'url';
const filePath = './dir1/dir2/text.txt';

//basename()
console.log(path.basename(filePath));

//dirname()
console.log(path.dirname(filePath));


//extname()
console.log(path.extname(filePath));

//parse()
console.log(path.parse(filePath));



const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//join()
const joinedPath = path.join(__dirname,'dir1', 'dir2', 'text.txt');
console.log(joinedPath);


const filePath2 = path.resolve(__dirname,'dir1', 'dir2', 'text.txt');

console.log(filePath2);
console.log('__filename:', __filename);
console.log('__dirname:', __dirname);

