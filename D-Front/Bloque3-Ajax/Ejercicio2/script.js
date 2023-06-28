"use strict";

const provinciasSelect = document.getElementById("provincias");
const municipiosSelect = document.getElementById("municipios");
const container = document.querySelector(".container");
const buscarBtn = document.getElementById("buscar");
const form = document.getElementById("form");

const renderError = function (msg) {
  container.insertAdjacentText("beforeend", msg);
};

// Función para obtener las provincias
const getProvincias = function () {
  fetch("http://localhost:3000/provincias")
    .then((response) => response.json())
    .then(data => {
      data.forEach(provincia => {

        //console.log(`${provincia.nm} ${provincia.id}`);

        const option = document.createElement("option");
        option.value = provincia.id;
        option.textContent = provincia.nm;
        provinciasSelect.appendChild(option);

      })
    })
    .catch(err => {
      console.log(`${err}`);
      renderError('Ha ocurrido un error al cargar los datos, inténtelo de nuevo más tarde')
    });
}

provinciasSelect.addEventListener("change", (event) => {
  const idProvinciaSeleccionada = event.target.value;

  // Si se selecciona una provincia, se obtiene los municipios
  if (idProvinciaSeleccionada) {
    municipiosSelect.disabled = false;
    getMunicipios(idProvinciaSeleccionada);

  } else {
    // Si se selecciona la opción por defecto, se deshabilita el desplegable de municipios
    municipiosSelect.disabled = true;
  }
});


// Función para obtener los municipios de una provincia
const getMunicipios = function (idProvinciaSeleccionada) {
  fetch(`http://localhost:3000/municipios/${idProvinciaSeleccionada}`)
    .then((response) => response.json())
    .then((data) => {

      // Elimina los elementos antiguos del select
      municipiosSelect.innerHTML = "";

      // Itera por los municipios y los agrega al select
      data.data.forEach((municipio) => {
        const option = document.createElement("option");
        option.value = municipio.id;
        option.textContent = municipio.nm;

        municipiosSelect.appendChild(option);
      });

      municipiosSelect.disabled = false;
    })
    .catch(err => {
      console.log(`${err}`);
      renderError('Ha ocurrido un error al cargar los datos, inténtelo de nuevo más tarde')
    });
}
getProvincias();

// Previene la recarga de la página al enviar el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// Función para obtener las casas rurales de un municipio
const getCasasRurales = function (idMunicipioSeleccionado) {
  fetch(`http://localhost:3000/hotels/filterByMunicipality/${idMunicipioSeleccionado}`)
    .then((response) => response.json())
    .then((data) => {

      // Elimina los elementos antiguos del contenedor
      container.innerHTML = "";

      // Si el municipio no tiene casas rurales
      if (data.data.length === 0) {
        container.insertAdjacentHTML(
          "beforeend",
          `<p>No se han encontrado resultados con esos parámetros.</p>`
        );
      } else {

        // Itera por las casas rurales y muestra el nombre y direccion
        data.data.forEach((casaRural) => {
          const card = `
          <h2>Resultado de la búsqueda:</h2>
          <div class="card">
            <h3>${casaRural.NOMBRE}</h3>
            <p>${casaRural.DIRECCION}</p>
            <button class="detalle-btn" geoCodigo="${casaRural.GEOCODIGO}">Ir a detalles</button>
          </div>
          `;
          container.insertAdjacentHTML("beforeend", card);

          // Pasa por parametro el geocodigo y redirige a la pagina de informacion de las casas
          const detalleBtns = document.querySelectorAll(".detalle-btn");
          detalleBtns.forEach((detalleBtn) => {
            
            detalleBtn.addEventListener("click", (event) => {
              const geocodigo = event.target.getAttribute("geoCodigo");
              window.location.href = `infoCasas.html?geoCodigo=${geocodigo}`;
            });
          });

        });
      }
    })
    .catch((err) => {
      console.log(`${err}`);
      renderError('Ha ocurrido un error al cargar los datos, inténtelo de nuevo más tarde');
    });
};

buscarBtn.addEventListener("click", (event) => {
  const idMunicipioSeleccionado = municipiosSelect.value;
  if (idMunicipioSeleccionado) {
    getCasasRurales(idMunicipioSeleccionado);
  }
});