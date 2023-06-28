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

// Copiamos el array programadores en copiaProgramadores
let copiaProgramadores = JSON.parse(JSON.stringify(programadores));

// Iteramos por el array
for (let i = 0; i < copiaProgramadores.length; i++) {

  // Condición para encontrar al programador Manuel
  if(copiaProgramadores[i].nombre == "Manuel"){
    
    // Iteramos el array de tareas de Manuel
    for(let j = 0; j< copiaProgramadores[i].tareas.length; j++){

      // Almacenamos la tarea en una variable
      let tarea = copiaProgramadores[i].tareas[j];

      // Condición para ver si son las tareas 4.2 o 4.3 y modificar el tiempo de desarrollo
      if(tarea.nombreTarea === "Tarea 4.2" || tarea.nombreTarea === "Tarea 4.3"){
        tarea.tiempoDesarrollo = "0 horas"
      }
    }
  }
}

console.log("Solución 1:")
console.log(copiaProgramadores);


console.log("Solución 2:")

// Copiamos el array programadores en copiaProgramadores
let copia = JSON.parse(JSON.stringify(programadores));

// Recorremos el array copia
copia.map(() =>{

  // Busca un porogramador con nombre Manuel
  let manuel = copia.find(programador => programador.nombre === 'Manuel');

  // Recorre el array de tareas de Manuel
  manuel.tareas.map((tarea)=>{

    // Condición para ver si son las tareas 4.2 o 4.3 y modificar el tiempo de desarrollo
    if(tarea.nombreTarea === "Tarea 4.2" || tarea.nombreTarea === "Tarea 4.3"){
      tarea.tiempoDesarrollo = "0 horas."
    }
  })

})

console.log(copia)