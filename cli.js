const program = require('commander');
const api = require('./index.js')
program.version('0.0.1');

program
    .option('-x, --xxx', 'what is xxx?')

program
    .command('add')
    .description('add a task')
    .action((...args) => {
        const words = args.slice(0, -1).join(' ')
        api.add(words)
    });
program
    .command('clear')
    .description('clear all tasks')
    .action((...args) => {
        console.log('all clear');
    });

program.parse(process.argv);

console.log(program.xxx);