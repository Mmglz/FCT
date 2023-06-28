'Use strict';

/*Esta solución es con fechas en formato MM/DD/YY*/

// Declaramos las fechas
let fecha1 = new Date("01/01/2023");
let fecha2 = new Date("02/24/2023");

// Creamos una función que tendrá como parametros dos fechas
function calcularDias(fech1, fech2){

    // con .getTime obtenemos los milisegundos de las fechas y los restamos para obtener su diferencia
    let diferencia = fech2.getTime() - fech1.getTime();

    // Dividimos este diferencia entre los milisegundos que tiene un día para obtener el número de días.
    let diasDeDiferencia = Math.round(diferencia / (1000 * 60 * 60 * 24));

    // Retornamos el número de días
    return diasDeDiferencia
}

// Guardamos el resultado funcion en una variable
let resultado = calcularDias(fecha1, fecha2)

console.log(`La diferencia es de ${resultado} días`)