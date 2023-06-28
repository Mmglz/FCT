'Use strict';

const arrayObjetos = [
    { nombre: 'Juanma', apellido1: 'Cano' }, 
    { nombre: 'David', apellido1: 'Quiñones' },
    { nombre: 'Manoli', apellido1: 'Mena'}
];

// Creamos una función a la que hay que pasar como parámetros un array y el nombre de una propiedad
function valoresPropiedad(arr, propiedad){

    // Creamos un array que almacenará el resultado
    const resultado = [];

    // Iteramos por el array
    for (let i = 0; i < arr.length; i++){

        // Añadimos al array resultado el valor de la propiedad pasada por parametro
        resultado.push(arr[i][propiedad])
    }

    // Retornamos el array resultado
    return resultado;
}

console.log("Solución1:")
console.log(valoresPropiedad(arrayObjetos, 'nombre'))


console.log("Solución 2:")

// Creamos una función a la que hay que pasar como parámetros un array y el nombre de una propiedad
function valores(arr, propiedad){

    // Con .map iteramos por cada elemento del array y retorna un nuevo array con los valores de la propiedad pasada como parametro
    return arr.map(objeto => objeto[propiedad])
};

console.log(valores(arrayObjetos, 'apellido1'))