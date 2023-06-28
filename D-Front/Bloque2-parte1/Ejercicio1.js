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

// Declaración de variables
let mayorTiempo = 0.0;
let nombreTarea;

// Recorre el array de programadores
for(let i = 0; i < programadores.length; i++){

  let programador = programadores[i];

  // Recorre todas las tareas
  for(let j = 0; j < programador.tareas.length; j++){

    let tarea = programador.tareas[j];

    // Convierte las horas del string en float
    const soloHoras = parseFloat(tarea.tiempoDesarrollo.split(" ")[0]);

    // Compara las horas de las tareas con la variable mayorTimpo
    if(soloHoras > mayorTiempo){

      // Actualiza el número de horas
      mayorTiempo = soloHoras;

      // Actualiza el nombre de la tarea
      nombreTarea = tarea.nombreTarea 
    }
 
  }
}

console.log(`La tarea con mayor tiempo de desarrollo es la ${nombreTarea}, con un tiempo de ${mayorTiempo} horas`)