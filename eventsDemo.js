import {EventEmitter } from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('event', () => {
    console.log('an event occurred!');
});
myEmitter.emit('event');
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});
myEmitter.emit('greet', 'prem');

myEmitter.on('data', (data) => {
    console.log(`Received data: ${data}`);
});
myEmitter.emit('data', 'This is some sample data.');
myEmitter.on('error', (err) => {
    console.error(`Error occurred: ${err.message}`);
});

myEmitter.emit('error', new Error('Something went wrong!'));

function fetchData() {
    setTimeout(() => {
        myEmitter.emit('data', 'Fetched data successfully!');
    }, 2000);
}
fetchData();

function  greetHandler(name, event) {
    console.log(`Hello from the bot event! Name: ${name}, Event: ${event}`);
}

function byeBotHandler(name) {
    console.log(`Goodbye from the bot event! Name: ${name}`);
}


// Registering event handlers for custom events
myEmitter.on('greetBot', greetHandler);

myEmitter.on('byeBot', byeBotHandler);

// Emitting custom events

myEmitter.emit('greetBot', 'prem', 'greetBot');
myEmitter.emit('byeBot', 'prem');

// error 

myEmitter.on('error', (err) => {
console.error(`Error occurred: ${err.message}`);
});

// simulate an error

myEmitter.emit('error', new Error('An unexpected error occurred!'));
