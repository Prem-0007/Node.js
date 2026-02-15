// import fs from 'fs';
import fs from 'fs/promises';
// readFile() - callback 

 //   fs.readFile('./text.txt'  , 'utf-8', (err, data) => {   if(err){      throw err;   } console.log(data);   });

/*
        const data = fs.readFileSync('./text.txt', 'utf-8');
        console.log(data);
        */
       fs.readFile('./text.txt', 'utf-8').then(data => console.log(data)) .catch(err => console.error(err));

       // readFile() - async/await

       const readFile = async () => {
        try {
   const data = await fs.readFile('./text.txt', 'utf-8');
   console.log(data);
        }
        catch(error){
     console.log(error);
        }
};
// writeFile()

const writeFile = async () => {
        try{
                await fs.writeFile('./text.txt', 'Hello World');
                console.log("File written to ......")
        }
        catch(error){
                console.log(error);

        }

};

// AppendFile()

const appendFile = async () => {
        try{
        await fs.appendFile('./text.txt', '\nThis is an appended text');
console.log("\nFile appended to ......")
}
catch(error){
        console.log(error);

}
};
appendFile();
writeFile();
readFile();

