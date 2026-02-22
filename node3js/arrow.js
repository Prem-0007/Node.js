// const square function (x) { 
//     
// return x * x 
// } 
const square = (x) => { 
return x * x 
} 
console.log(square(2))    
// Will print: 4 

const squareAlt = (x) => x * x 
console.log(squareAlt(2)) // Will print: 4 

const event = { 
name: 'Birthday Party', 
guestList: ['Prem', 'Kas', 'Bot'], 
printGuestList() { 
console.log('Guest list for ' + this.name) 
this.guestList.forEach((guest) => { 
console.log(guest + ' is attending ' + this.name) 
}) 
} 
} 
event.printGuestList();

const users = [{ 
name: 'Lorem Ipsum', 
age: 27 
},{ 
name: 'Prem Bot', 
age: 18 
},{ 
name: 'Kas picchi', 
age: 19 
}] ;
const user = users.find((user) => user.name === 'Kas picchi') ;
console.log(user);

