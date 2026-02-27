/*const fs = require('fs')*/
/* sync 
console.log('1. Starting sync read...');
const data = fs.readFileSync('myfile.txt', 'utf8');
console.log('2. File contents:', data);
console.log('3. Done reading file');

*/
/*
console.log('1. Starting async read...');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('2. File contents:', data);
});

console.log('3. Done starting read operation');

*/

/*Avoiding Callback Hell */

const fs = require('fs').promises;
/*
console.log('1. Reading file...');
fs.readFile('myfile.txt', 'utf8')
  .then(data => {
    console.log('3. File content:', data);
  })
  .catch(err => console.error('Error:', err));

console.log('2. This runs before file is read!');
*/