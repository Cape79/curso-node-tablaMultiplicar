import { crearArchivo } from './utilitarios/multiplicar.js';
import { argv } from './config/yargs.js'
console.clear();

//console.log( argv );
// console.log( 'base: yargs', argv.b );

const base = argv.b;
const imprimir = argv.l;

crearArchivo( base, imprimir )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado'))
    .catch( err => console.log( err ));