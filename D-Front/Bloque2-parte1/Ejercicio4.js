'Use strict';

let programadores = [
  {
    nombre: 'Juan',
    id: 1,
    tareas: [
      {
        nombreTarea: 'Tarea 1.1',
        idTarea: 1.1,
        tiempoDesarrollo: '25 horas',
      },
      {
        nombreTarea: 'Tarea 1.2',
        idTarea: 1.2,
        tiempoDesarrollo: '10 horas',
      },
      { nombreTarea: 'Tarea 1.3', idTarea: 1.3, tiempoDesarrollo: '2 horas' },
      {
        nombreTarea: 'Tarea 1.4',
        idTarea: 1.4,
        tiempoDesarrollo: '2.5 horas',
      },
    ],
  },
  {
    nombre: 'Lucia',
    id: 2,
    tareas: [
      { nombreTarea: 'Tarea 2.1', idTarea: 2.1, tiempoDesarrollo: '5 horas' },
      { nombreTarea: 'Tarea 2.2', idTarea: 2.2, tiempoDesarrollo: '1 hora' },
      {
        nombreTarea: 'Tarea 2.3',
        idTarea: 2.3,
        tiempoDesarrollo: '26 horas',
      },
      {
        nombreTarea: 'Tarea 2.4',
        idTarea: 2.4,
        tiempoDesarrollo: '3.75 horas',
      },
    ],
  },
  {
    nombre: 'David',
    id: 3,
    tareas: [
      { nombreTarea: 'Tarea 3.1', idTarea: 3.1, tiempoDesarrollo: '7 horas' },
      {
        nombreTarea: 'Tarea 3.2',
        idTarea: 3.2,
        tiempoDesarrollo: '6 horas',
      },
      {
        nombreTarea: 'Tarea 3.3',
        idTarea: 3.3,
        tiempoDesarrollo: '9 horas',
      },
      {
        nombreTarea: 'Tarea 3.4',
        idTarea: 3.4,
        tiempoDesarrollo: '2.5 horas',
      },
    ],
  },
  {
    nombre: 'Manuel',
    id: 4,
    tareas: [
      { nombreTarea: 'Tarea 4.1', idTarea: 4.1, tiempoDesarrollo: '7 horas' },
      {
        nombreTarea: 'Tarea 4.2',
        idTarea: 4.2,
        tiempoDesarrollo: '16 horas',
      },
      {
        nombreTarea: 'Tarea 4.3',
        idTarea: 4.3,
        tiempoDesarrollo: '29 horas',
      },
      {
        nombreTarea: 'Tarea 4.4',
        idTarea: 4.4,
        tiempoDesarrollo: '2.5 horas',
      },
    ],
  },
];

// Creamos un array para la copia
let copiaProgramadores = [];

// Iteramos por el array
for (let i = 0; i < programadores.length; i++) {

  // Iteramos el array de tareas
  for (let j = 0; j < programadores[i].tareas.length; j++) {

    // Almacenamos la tarea en una variable
    let tarea = programadores[i].tareas[j];

    // Convertimos las horas del string en float
    const soloHoras = parseFloat(tarea.tiempoDesarrollo);

    // Condición para ver si el tiempo de desarrollo es mayor que 25
    if (soloHoras > 25) {
      
      // Si el tiempo es mayor de 25, el porgramador se guarda en el array copiaProgramadores
      copiaProgramadores.push(JSON.parse(JSON.stringify(programadores[i])));
    }
  }
}
console.log("Solución 1:")
console.log(copiaProgramadores);


console.log("Solución 2:")

// Creamos un nuevo array llamado copia que cumplan con la condicion de que al menos una tarea tiene que tener un tiempo superior de 25 horas
let copia = programadores.filter(programador=>{

  // Con .some comprobamos si el programador tiene al menos una tarea con tiempo de desarrollo mayor que 25 y lo retorna
  return programador.tareas.some(tarea => parseFloat(tarea.tiempoDesarrollo) > 25);
})

console.log(copia);