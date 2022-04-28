// imports
import chalk from 'chalk';
import fs from 'fs';
import * as rl from 'readline-sync';

import * as Yupana from './src/index.js';

// limits
const types = fs.readdirSync('./src').filter(file => file.endsWith('.js') && file !== 'index.js').map(file => file.replace('.js', ''));
rl.setDefaultOptions({
    limit: [...types, 'help'],
    limitMessage: 'Sorry, $<lastInput> is not a valid option.'
});

// formatting
const log = console.log;
const title = chalk.black.bgGreen.bold;
const ask = chalk.cyan;
const head = chalk.underline;

// start
log(title('Welcome to Yupana!'));

while (true) {
    log(ask(`\nWhich type of problem would you like?`));
    const input = rl.prompt();
    
    if (input === 'help') {
        log(`\n${head('Valid options:')}\n${types.join(`\n`)}`);
        continue;
    }
    
    const type = Yupana[input];
    
}