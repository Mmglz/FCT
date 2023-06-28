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
let copiaProgramadores = []

// Iteramos por el array original
for (let i = 0; i < programadores.length; i++) {

  // Y vamos añadiendo los valores a la copia. Si se usa esa esta opción, cuando se modifique el tiempo de desarrollo de la copia también se modificará en el array original
  //copiaProgramadores.push(programadores[i]);

  // Con esta línea se copia el array y al modificarlo no modifica el original
  copiaProgramadores.push(JSON.parse(JSON.stringify(programadores[i])));
}

// Iteramos por la copia
for (let j = 0; j < copiaProgramadores.length; j++) {

  // Iteramos por las tareas de la copia
  for (let k = 0; k < copiaProgramadores[j].tareas.length; k++) {
   
    // Y cambiamos el tiempo de desarrollo a 0
    copiaProgramadores[j].tareas[k].tiempoDesarrollo = "0 horas"
  }
}

console.log("Solución 1:")
console.log(copiaProgramadores)


console.log("Solución 2: ")

// Volvemos a copiar el array programadores en el array copia usando el JSON.parse(JSON.stringify)
let copia = JSON.parse(JSON.stringify(programadores));

// Recorremos el array de copia
copia.map((programador) =>{

  //Recorremos el array de tareas de cada programador
  programador.tareas.map((tarea) =>{

    // Modificamos el tiempo de desarrollo a 0 horas.
    tarea.tiempoDesarrollo = "0 horas."
  })
});

console.log(copia);