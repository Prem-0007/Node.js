let name = `prem`;
const age = 18;

function greet(user) {
    return `hello ${user}`; 

}

let add = (a,b) => a+b;

console.log(greet(name));
console.log(add(5,10));


const user = {
    name: `prem`,
    age : 18,
    greet(){
        return `hello ${this.name}`;
    }

};

const colors = [`red`, `green`, `blue`, `black`];

colors.forEach(color => console.log(color));

const lengths = colors.map (color => color.length);

console.log(lengths);

const numbers = [1,2,3,4,5];

const squares = numbers.map(s => s*s);

console.log(squares);


const cubes = numbers.map( s => s*s*s);
console.log(cubes);

const even = numbers.filter(n => n%2 ===0);
console.log(even);

const odd = numbers.filter(n => n%2 !==0);
console.log(odd);

const sum = numbers.reduce((acc,n) => acc+n, 0);

console.log(sum);


// asynchronous programming

function fetchData(callback) {
    setTimeout(() => {
        callback(`Data fetched successfully!`);
    }, 1000);
}

const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data fetched successfully!`);
        }, 1000);
    });
};

async function fetchDataAsync() {
    const data = await fetchDataPromise();
    console.log(data);
}
fetchDataAsync();
