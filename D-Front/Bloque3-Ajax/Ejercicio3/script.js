"use strict";

const periodistaSelect = document.getElementById("periodista");
const container = document.querySelector(".container");
const error = document.querySelector(".error");
const noticiassContainer = document.querySelector(".noticias-container");
const buscarBtn = document.getElementById("buscar");
const form = document.getElementById("form");

const renderError = function (msg) {
  error.insertAdjacentText("beforeend", msg);
};

const renderNoticias = function (data, className = "") {
  const html = `
    <div class="col-md-4">
      <div class="card ${className}">
        <div class="card-body">
          <h5 class="card-title">${data.titular}</h5>
          
          <a href="detalleNoticia.html?idPeriodista=${data.id_periodista}&titular=${encodeURIComponent(data.titular)}&noticia=${encodeURIComponent(data.noticia)}" target="_blank" class="btn btn-primary">Leer más +</a>
        </div>
      </div>
    </div>
  `;
  noticiassContainer.insertAdjacentHTML("beforeend", html);
  noticiassContainer.style.opacity = 1;
};

// Función para obtener los periodistas
const getPeriodistas = function () {
  fetch("http://localhost:3000/periodistas")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((periodista) => {

        const option = document.createElement("option");
        option.value = periodista.id_periodista;
        option.textContent = periodista.name;
        periodistaSelect.appendChild(option);
      });
    })
    .catch((err) => {
      console.log(`${err}`);
      renderError(
        "Ha ocurrido un error al cargar los datos, inténtelo de nuevo más tarde."
      );
    });
};

// Función para obtener las noticias de un periodista
const getArticulosByPeriodista = function (idPeriodista) {
  fetch(`http://localhost:3000/articulos/${idPeriodista}`)
    .then((response) => response.json())
    .then((data) => {
      noticiassContainer.innerHTML = "";
      error.innerHTML = "";

      data.data.forEach((noticia) => {
        renderNoticias(noticia);
      })
      
    })
    .catch((err) => {
      console.log(`${err}`);
      renderError(
        "Ha ocurrido un error al cargar los datos, inténtelo de nuevo más tarde."
      );
    });
};

// Evento para el botón de buscar
buscarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const idPeriodista = periodistaSelect.value;
  
  if (!idPeriodista) {
    noticiassContainer.innerHTML = "";
    renderError("Debe seleccionar un periodista.");
    
    return;
  }
  
  getArticulosByPeriodista(idPeriodista);
});

getPeriodistas();