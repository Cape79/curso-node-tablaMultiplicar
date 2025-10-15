import fs from 'fs';
import colors from 'colors'

let salida = '';

export const crearArchivo = async( base = 5, imprimir ) => {
    try {       

        for (let i = 1; i <= 10; i++) {
        salida += `Valor de ${ base } x ${ i }= ${ base*i }\n`;
        }

        if ( imprimir ) {
            console.log('==============');
            console.log(colors.rainbow('  Tabla del '), colors.bgGreen(base));
            console.log('==============');
            console.log(salida);
        }

        fs.writeFileSync( `tabla-${ base }.txt`, salida);
        
        return(`tabla-${ base }.txt`);
    } catch (error) {
        throw error;
    }    
}