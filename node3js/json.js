const book = { 
title: 'Ego is the Enemy', 
author: 'Ryan Holiday' 
} 
// Covert JavaScript object into JSON string 
const bookJSON = JSON.stringify(book) 
console.log(bookJSON) // Print: {"title":"Ego is the Enemy","author":"Ryan Holiday"}
// Covert JSON string into object 
const bookObject = JSON.parse(bookJSON) 
console.log(bookObject.title) // Print: Ego is the Enemy 



// Import File System module
const fs = require('fs');

// ------------------------------------
// STEP 1: Create JavaScript Object
// ------------------------------------
const person = {
    name: "kas",
    age: 19,
    city: "Hyderabad"
};

console.log("Original Object:");
console.log(person);


// ------------------------------------
// STEP 2: Convert Object → String
// ------------------------------------
const jsonString = JSON.stringify(person);

console.log("\nAfter JSON.stringify():");
console.log(jsonString);


// ------------------------------------
// STEP 3: Save String to File
// ------------------------------------
fs.writeFileSync('person.json', jsonString);

console.log("\nData saved to person.json");


// ------------------------------------
// STEP 4: Read Data From File
// ------------------------------------
const fileBuffer = fs.readFileSync('person.json');

const fileString = fileBuffer.toString();

console.log("\nData read from file:");
console.log(fileString);


// ------------------------------------
// STEP 5: Convert String → Object
// ------------------------------------
const parsedObject = JSON.parse(fileString);

console.log("\nAfter JSON.parse():");
console.log(parsedObject);


// ------------------------------------
// STEP 6: Access Object Properties
// ------------------------------------
console.log("\nAccessing properties:");
console.log("Name:", parsedObject.name);
console.log("Age:", parsedObject.age);
console.log("City:", parsedObject.city);
