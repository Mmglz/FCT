"use strict";

const storesTable = document.querySelector(".stores");
const container = document.querySelector(".container");

const renderStores = function (data) {
  const html = `
        <tbody>
          <tr>
            <td>${data.id}</td>
            <td> ${data.address}</td>
            <td> ${data.type}</td>
            <td> ${data.nombre}</td>
            <td> ${data.latitude}</td>
            <td> ${data.longitude}</td>
          </tr>
        </tbody>
    `;
  storesTable.insertAdjacentHTML("beforeend", html);
};

const renderError = function (msg) {
  container.insertAdjacentText("beforeend", msg);
};


// Funcion para obtener las tiendas
const getStores = function () {

  // Se busca en el servidor
  fetch('http://localhost:3000/stores')

    // Se obtiene una respuesta que se tranforma en json
    .then(response => response.json())

    // Se coge los datos y se muestra
    .then(data => {
      for(let i = 0; i < data.length; i++){
        renderStores(data[i])
      } 
    })
    .catch(err => {
      console.log(`${err}`);
      renderError('Ha ocurrido un error al cargar los datos, inténtelo de nuevo más tarde')
  })
};

getStores();