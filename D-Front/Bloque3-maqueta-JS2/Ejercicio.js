'Use strict';

const form = document.querySelector('form');
const nameInput = document.getElementById('nombre');
const lastNameInput = document.getElementById('apellidos');
const ageInput = document.getElementById('edad');
const genderInput = document.getElementById('sexo');
const birthdateInput = document.getElementById('fecha-nacimiento');
const roadInput = document.getElementById('via');
const roadNameInput = document.getElementById('nombre-via');
const numberInput = document.getElementById('portal');
const zipCodeInput = document.getElementById('codigo-postal');
const cityInput = document.getElementById('localidad');
const provinceInput = document.getElementById('provincia');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('telefono');
const commentInput = document.getElementById('observaciones');

redBorder = '1px solid red';
blackBorder = '1px solid black';

// Validacion imagen
function validateSize(obj) {
    let sizeByte = obj.files[0].size;
    let siezekiloByte = parseInt(sizeByte / 1024);
    if (siezekiloByte > 125) {
        alert('El tamaño supera el limite permitido de 1mb');
        return;
    }
}

form.addEventListener('submit', (event) => {
    let isValid = true;

    // Validacion nombre
        if (nameInput.value.trim() === '' || !(/^[a-zA-Z ]+$/.test(nameInput.value))) {
        nameInput.style.border = redBorder;
        isValid = false;
    }

    // Validacion apellidos
    if (lastNameInput.value.trim() === '' || !(/^[a-zA-Z ]+$/.test(lastNameInput.value))) {
        lastNameInput.style.border = redBorder;
        isValid = false;
    }

    // Validacion edad
    if (ageInput.value.trim() === '') {
        ageInput.style.border = redBorder;
        isValid = false;
    }

    // Validacion sexo
    if (genderInput.selectedIndex == 0) {
        genderInput.style.border = redBorder;
        isValid = false;
    }

    // Validacion fecha de nacimiento
    const currentDate = new Date();
    const birthdate = new Date(birthdateInput.value)

    if (birthdateInput.value.trim() === '' || birthdate > currentDate) {
        birthdateInput.style.border = redBorder;
        alert('Fecha invalida');
        isValid = false;
    }

    // Validacion tipo de vía
    if (roadInput.selectedIndex == 0) {
        roadInput.style.border = redBorder;
        isValid = false;
    }

    // Validacion nombre de la vía
    if (roadNameInput.value.trim() === '') {
        roadNameInput.style.border = redBorder;
        isValid = false;
    }

    // Validacion del portal
    if (numberInput.value.trim() === '') {
        numberInput.style.border = redBorder;
        isValid = false;
    }

    // Validacion codigo postal
    if (zipCodeInput.value.trim() === '' || zipCodeInput.value.length < 5) {
        zipCodeInput.style.border = redBorder;
        isValid = false;
    }

    if (provinceInput.value == "Sevilla" && cityInput.value.match(/^dos hermanas$/i)) {

        if (zipCodeInput.value !== "10001" && zipCodeInput.value !== "10002" && zipCodeInput.value !== "10003") {

            alert('El código postal de Dos Hermanas es 1001, 1002 o 1003')
            zipCodeInput.style.border = redBorder;
            isValid = false;
        }
    }

    // Validacion localidad
    if (cityInput.value.trim() === '' || !(/^[A-z0-9 ]+$/.test(cityInput.value))) {
        cityInput.style.border = redBorder;
        isValid = false;
    }

    // Validacion provincia
    if (provinceInput.selectedIndex == 0) {
        provinceInput.style.border = redBorder;
        isValid = false;
    }

    // Validacion email
    if (!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(emailInput.value))) {
        emailInput.style.border = redBorder;
        isValid = false;
    }

    // Validacion telefono
    if (!(/[0-9]{9}/.test(phoneInput.value))) {
        phoneInput.style.border = redBorder;
        isValid = false;
    }

    // Validacion observaciones
    if (commentInput.value.length > 500) {
        commentInput.style.border = redBorder;
        isValid = false;
    }


    if (!isValid) {
        event.preventDefault();
    }
});


// Limpia el formulario y vuelve los inputs y selects del color original
const allInputs = form.querySelectorAll("input");
const allSelects = form.querySelectorAll("select");

form.addEventListener('reset', () => {

    allInputs.forEach(function (input) {
        input.style.border = blackBorder;
    });

    allSelects.forEach(function (select) {
        select.style.border = blackBorder;
    });
});