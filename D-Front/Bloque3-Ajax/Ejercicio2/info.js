"use strict";

// Obtenemos el parámetro "geoCodigo" de la URL
const urlParams = new URLSearchParams(window.location.search);
const geoCodigo = urlParams.get('geoCodigo');

const renderError = function (msg) {
  container.insertAdjacentText("beforeend", msg);
};

// Función para obtener la informacion detallada de una casa rural
const getCasaRural = function (geoCodigo) {
  fetch(`http://localhost:3000/hotels/${geoCodigo}`)
    .then((response) => response.json())
    .then((data) => {

      // Muestra la información de la casa rural
      document.getElementById("nombre").textContent = data.data.NOMBRE;
      document.getElementById("direccion").textContent = data.data.DIRECCION;
      document.getElementById("geocodigo").textContent = data.data.GEOCODIGO;
      document.getElementById("tipo").textContent = data.data.TIPO;
      document.getElementById("idMunicipio").textContent = data.data.id_municipio;
      document.getElementById("coordenadas").textContent = `Longitud: ${data.data.geometry.coordinates[0]} y latitud: ${data.data.geometry.coordinates[1]}`;
    })
    .catch((err) => {
      console.log(`${err}`);
      renderError('Ha ocurrido un error al cargar los datos, inténtelo de nuevo más tarde')
    });

  fetch(`http://localhost:3000/actividades/${geoCodigo}`)
    .then((response) => response.json())
    .then((data) => {
      // Muestra las actividades
      const listaActividades = document.getElementById("actividades");
      data.data.actividades.forEach((actividad) => {
        const dt = document.createElement("dt");
        dt.textContent = actividad.nombre;
        listaActividades.appendChild(dt);

        const dd = document.createElement("dd");
        dd.textContent = actividad.descripcion;
        listaActividades.appendChild(dd);
      });
    })
    .catch((err) => {
      console.log(`${err}`);
      renderError('Ha ocurrido un error al cargar los datos, inténtelo de nuevo más tarde')
    });
};

getCasaRural(geoCodigo);