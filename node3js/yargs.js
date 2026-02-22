const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv));

argv
  .command({
    command: 'add',
    describe: 'Add a new item',
    handler: function () {
      console.log('Adding item!');
    }
  })
  .version('1.1.0')
  .parse();


  argv.command({ 
    command: 'add', 
    describe: 'Add a new note', 
    builder: { 
        title: { 
            describe: 'Note title', 
            demandOption: true, 
            type: 'string' 
        }, 
        body: { 
            describe: 'Note body', 
            demandOption: true, 
            type: 'string' 
        } 
    }, 
    handler: function (argv) { 
        console.log('Title: ' + argv.title) 
        console.log('Body: ' + argv.body) 
    } 
}).parse()
