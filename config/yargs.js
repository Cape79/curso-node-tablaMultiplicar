import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// const argv2 = yargs(hideBin(process.argv)).argv;
// console.log( argv2 );

export const argv = await yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        demandOption: true,    
        type: 'number',
        describe: 'Es la base para multiplicar'
    })    
    .check( (argv, options) => {
        if ( isNaN( argv.b ) ) {
            throw new Error( 'La base debe ser un número.' );
        }        
        return true;
    })
    .option('l', {
        alias: 'listar',  
        type: 'boolean',
        default: false,
        describe: 'Muestra por pantalla la tabla'
    })    
    .argv;