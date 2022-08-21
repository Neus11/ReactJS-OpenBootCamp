import { suma, multiplica } from './controller.js'
import chalk from 'chalk';

const sum = suma(1, 2);
console.log(chalk.green(sum));

const multi = multiplica(4, 5);
console.log(chalk.green(multi));
 