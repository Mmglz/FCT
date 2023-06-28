'Use strict';

const texto =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis erat at metus imperdiet mattis vitae a massa. Nullam sit amet nisl fermentum, congue quam sed, posuere quam. In non volutpat orci. Duis arcu tortor, eleifend porta nunc eget, iaculis vestibulum orci. Nam fringilla tincidunt tellus, non rutrum dolor fringilla ac.  Suspendisse potenti. Duis laoreet euismod nunc, non lobortis mauris tempus quis. Sed quis elementum felis, nec porta leo. Quisque quis ante quis metus rhoncus tristique. Integer viverra enim nec ex feugiat auctor. Vestibulum molestie metus eu nibh vulputate semper  Proin vestibulum luctus lectus. Aliquam accumsan ex in tortor efficitur accumsan. Praesent sed leo sapien. Donec at libero tincidunt, pretium elit ut, cursus sapien. Proin ac nibh aliquam, ultrices diam sagittis, sagittis ante. Vestibulum viverra molestie enim non sodales. Pellentesque sit amet blandit orci.  Cras a elementum mi, tempus bibendum velit. Quisque posuere purus eget ex consequat vehicula. Aliquam purus arcu, aliquam ac lectus vel, porta sodales lacus. Fusce eu diam sit amet felis dapibus consequat. Ut ut pellentesque dui. Suspendisse eget dolor ullamcorper, facilisis sapien id, sodales massa. Aliquam erat volutpat. Nam iaculis vehicula justo, vel ultricies tellus dignissim nec. Quisque a mi lacus. Mauris fermentum erat sit amet sem porta dignissim. Curabitur iaculis vitae turpis fringilla finibus. Fusce mollis ullamcorper neque, ac luctus dolor sodales eget.';

  // Dividimos el array por espacios en blanco 
const palabrasTexto = texto.split(' ');

// Creamos un nuevo array
const arrayPalabras = [];

// Recorremos el array dividido en palabras
for(let i = 0; i < palabrasTexto.length; i++){

  // Eliminamos de cada palabra los caracteres especiales y solo nos quedamos con las palabras.
  let palabras = palabrasTexto[i].replace(/[^a-zA-Z ]+/g, '');

  // Almacenamos el tamaño de las palabras.
  let tamanio = palabras.length;

  // Si no existe ese tamaña en el array lo crea
  if(!arrayPalabras[tamanio]){
    arrayPalabras[tamanio] = []
  }

  // Añadimos la palabra en el array dependiendo de su tamaño
  arrayPalabras[tamanio].push(palabras)
}

console.log(arrayPalabras);