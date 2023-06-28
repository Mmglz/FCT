'Use strict';

let personas = [
  { nombre: 'Juanma', apellido: 'Cano', edad: 22 },
  { nombre: 'Juanma', apellido: 'Armario', edad: 45 },
  { nombre: 'David', apellido: 'Quiñones', edad: 18 },
  { nombre: 'David', apellido: 'Lopez', edad: 18 },
  { nombre: 'Alberto', apellido: 'Rus', edad: 18 },
  { nombre: 'Alberto', apellido: 'Rus', edad: 24 },
  { nombre: 'Alberto', apellido: 'Rodriguez', edad: 80 },
];

// Creamos una copia del array
let copia = JSON.parse(JSON.stringify(personas));

// Ordenamos el array primero por el nombre, luego por la edad y por ultimo por el apellido
copia.sort(function (a,b){
  if(a.nombre > b.nombre) return 1;
  if(a.nombre < b.nombre) return -1;

  if(a.edad > b.edad) return 1;
  if(a.edad < b.edad) return -1;

  if(a.apellido > b.apellido) return 1;
  if(a.apellido < b.apellido) return -1

  return 0
});

console.log(copia)