const fs = require('fs');

function leerArchivoCSV(ruta) {
    const resultados = [];

    fs.readFile(ruta, 'utf8', (err, data) => {
        if (err) {
        console.error('Error al leer el archivo CSV:', err);
        return;
        }

        const lineas = data.split('\n');
        const encabezados = lineas[0].split(',');

        for (let i = 1; i < lineas.length; i++) {
        const fila = lineas[i].split(',');
        if (fila.length === encabezados.length) {
            const objeto = {};
            for (let j = 0; j < encabezados.length; j++) {
            objeto[encabezados[j]] = fila[j];
            }
            resultados.push(objeto);
        }
        }

        console.log('Datos del archivo CSV:', resultados);
    });
}

