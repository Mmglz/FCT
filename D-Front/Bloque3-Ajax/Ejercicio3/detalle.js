"use strict";

const articulo = document.querySelector(".articulo");
const error = document.querySelector(".error");
const params = new URLSearchParams(window.location.search);
const idPeriodista = params.get('idPeriodista');
const titular = params.get('titular');
const noticia = params.get('noticia');


document.getElementById('titular').textContent = titular;
document.getElementById('id_periodista').textContent = idPeriodista;
document.getElementById('noticia').textContent = noticia;

const renderError = function (msg) {
    error.insertAdjacentText("beforeend", msg);
};