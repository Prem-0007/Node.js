global.mylet = 20;
console.log(global.mylet);
// In a browser environment, you would use 'window' instead of 'global''
/*
window.mylet = 30;

console.log(window.mylet)

*/
globalThis.mylet = 20;
console.log(globalThis.mylet);

globalThis.mylet = 30;
console.log(globalThis.mylet);



if (typeof window !== "undefined") {
  window.mylet = 30;
  console.log(window.mylet);
} else {
  global.mylet = 30;
  console.log(global.mylet);
}

console.log("file name:", __filename);
console.log("directory name:", __dirname);
const fs = require('fs');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("This will run before the file is read due to asynchronous nature of readFile");

const https = require('https');
https.get('https://youtube.com', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});

fetch('https://youtube.com')
  .then(response => response.text())
  .then(console.log);