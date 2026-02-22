const command = process.argv[2] ;
const name = process.argv[3] ;
if (command === 'add') { 
console.log('Adding note!') ;
} else if (command === 'remove') { 
console.log('Removing note!') ;
}
else if (command === 'bot'){
    console.log('Welcome to Bot Node.js!');
}
else {
    console.log('Command not recognized!');
}

if (name) {

    console.log(`Hello, ${name}!`);
} else {
    console.log('Hello!');
}
