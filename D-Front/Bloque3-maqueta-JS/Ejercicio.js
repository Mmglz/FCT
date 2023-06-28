'Use strict';

const form = document.createElement("form");

/* Datos personales */
const personalInformation = document.createElement("fieldset");
const PILegend = document.createElement("legend");
PILegend.textContent = "Datos personales";
personalInformation.appendChild(PILegend);

// Nombre
const nameLabel = document.createElement("label");
nameLabel.innerHTML = "Nombre: ";
personalInformation.appendChild(nameLabel);

const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "name");
nameInput.setAttribute("pattern", "^[a-zA-Z ]+$");
nameInput.setAttribute("required", "required");
personalInformation.appendChild(nameInput);

personalInformation.appendChild(document.createElement("br"));
personalInformation.appendChild(document.createElement("br"));

// Apellidos
const lastNameLabel = document.createElement("label");
lastNameLabel.innerHTML = "Apellidos: ";
personalInformation.appendChild(lastNameLabel);

const lastNameInput = document.createElement("input");
lastNameInput.setAttribute("type", "text");
lastNameInput.setAttribute("name", "lastName");
lastNameInput.setAttribute("pattern", "^[a-zA-Z ]+$");
lastNameInput.setAttribute("required", "required");
personalInformation.appendChild(lastNameInput);

personalInformation.appendChild(document.createElement("br"));
personalInformation.appendChild(document.createElement("br"));

// Edad
const ageLabel = document.createElement("label");
ageLabel.innerHTML = "Edad: ";
personalInformation.appendChild(ageLabel);

const ageInput = document.createElement("input");
ageInput.setAttribute("type", "number");
ageInput.setAttribute("name", "age");
ageInput.setAttribute("min", "1");
ageInput.setAttribute("max", "99");
personalInformation.appendChild(ageInput);

personalInformation.appendChild(document.createElement("br"));
personalInformation.appendChild(document.createElement("br"));

// Sexo
const genderLabel = document.createElement("label");
genderLabel.innerHTML = "Sexo: ";
personalInformation.appendChild(genderLabel);

const genderSelect = document.createElement("select");
genderSelect.setAttribute("name", "gender");

const masculineOption = document.createElement("option");
masculineOption.innerHTML = "Hombre"
masculineOption.setAttribute("value", "masculineOption");
genderSelect.appendChild(masculineOption);

const femaleOption = document.createElement("option");
femaleOption.innerHTML = "Mujer"
femaleOption.setAttribute("value", "femaleOption");
genderSelect.appendChild(femaleOption);

const otherOption = document.createElement("option");
otherOption.innerHTML = "Otro"
otherOption.setAttribute("value", "otherOption");
genderSelect.appendChild(otherOption);

personalInformation.appendChild(genderSelect);

personalInformation.appendChild(document.createElement("br"));
personalInformation.appendChild(document.createElement("br"));

// Fecha nacimiento
const birthDateLabel = document.createElement("label");
birthDateLabel.innerHTML = "Fecha de nacimiento: ";
personalInformation.appendChild(birthDateLabel);

const birthDateInput = document.createElement("input");
birthDateInput.setAttribute("type", "date");
birthDateInput.setAttribute("name", "birthDate");
birthDateInput.setAttribute("required", "required");
personalInformation.appendChild(birthDateInput);


/* Direccion */
const address = document.createElement("fieldset");
const addressLegend = document.createElement("legend");
addressLegend.textContent = "Dirección";
address.appendChild(addressLegend);

// Tipo de via
const roadLabel = document.createElement("label");
roadLabel.innerHTML = "Tipo de vía: ";
address.appendChild(roadLabel);

const roadSelect = document.createElement("select");
roadSelect.setAttribute("name", "road");
roadSelect.setAttribute("required", "required");

const roadOptions = ['Calle', 'Avenida', 'Plaza', 'Carretera', 'Otro']

for(let i = 0; i < roadOptions.length; i++){
    let optionRoad = document.createElement("option");
    optionRoad.setAttribute("value", optionRoad[i]);
    optionRoad.innerHTML = roadOptions[i];
    roadSelect.appendChild(optionRoad);
}

address.appendChild(roadSelect);

address.appendChild(document.createElement("br"));
address.appendChild(document.createElement("br"));

// Nombre de la vía
const nameRoadLabel = document.createElement("label");
nameRoadLabel.innerHTML = "Nombre: ";
address.appendChild(nameRoadLabel);

const nameRoadInput = document.createElement("input");
nameRoadInput.setAttribute("type", "text");
nameRoadInput.setAttribute("name", "roadName");
nameRoadInput.setAttribute("required", "required");

address.appendChild(nameRoadInput);

address.appendChild(document.createElement("br"));
address.appendChild(document.createElement("br"));

// Portal
const numberLabel = document.createElement("label");
numberLabel.innerHTML = "Portal: ";
address.appendChild(numberLabel);

const numberInput = document.createElement("input");
numberInput.setAttribute("type", "text");
numberInput.setAttribute("name", "number");
numberInput.setAttribute("required", "required");
address.appendChild(numberInput);

address.appendChild(document.createElement("br"));
address.appendChild(document.createElement("br"));

// Planta
const floorLabel = document.createElement("label");
floorLabel.innerHTML = "Planta: ";
address.appendChild(floorLabel);

const floorInput = document.createElement("input");
floorInput.setAttribute("type", "text");
floorInput.setAttribute("name", "floor");
address.appendChild(floorInput);

address.appendChild(document.createElement("br"));
address.appendChild(document.createElement("br"));

// Puerta
const doorLabel = document.createElement("label");
doorLabel.innerHTML = "Puerta: ";
address.appendChild(doorLabel);

const doorInput = document.createElement("input");
doorInput.setAttribute("type", "text");
doorInput.setAttribute("name", "door");
doorInput.setAttribute("pattern", "[A-z0-9]{1,3}");
address.appendChild(doorInput);

address.appendChild(document.createElement("br"));
address.appendChild(document.createElement("br"));

// Codigo postal
const zipCodeLabel = document.createElement("label");
zipCodeLabel.innerHTML = "Código postal: ";
address.appendChild(zipCodeLabel);

const zipCodeInput = document.createElement("input");
zipCodeInput.setAttribute("type", "text");
zipCodeInput.setAttribute("name", "zipCode");
zipCodeInput.setAttribute("pattern", "[0-9]{5}");
address.appendChild(zipCodeInput);

address.appendChild(document.createElement("br"));
address.appendChild(document.createElement("br"));

// Localidad
const cityLabel = document.createElement("label");
cityLabel.innerHTML = "Localidad: ";
address.appendChild(cityLabel);

const cityInput = document.createElement("input");
cityInput.setAttribute("type", "text");
cityInput.setAttribute("name", "city");
cityInput.setAttribute("pattern", "^[A-z0-9 ]+$");
cityInput.setAttribute("required", "required");
address.appendChild(cityInput);

address.appendChild(document.createElement("br"));
address.appendChild(document.createElement("br"));

// Provincia
const provinceLabel = document.createElement("label");
provinceLabel.innerHTML = "Provincia: ";
address.appendChild(provinceLabel);

const provinceSelect = document.createElement("select");
provinceSelect.setAttribute("name", "province");
provinceSelect.setAttribute("required", "required");

const provinceOptions = ['Elige Provincia', 'Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza']

for(let i = 0; i < provinceOptions.length; i++){
    let optionProvince = document.createElement("option");
    optionProvince.setAttribute("value", optionProvince[i]);
    optionProvince.innerHTML = provinceOptions[i];
    provinceSelect.appendChild(optionProvince);
};

address.appendChild(provinceSelect);

address.appendChild(document.createElement("br"));
address.appendChild(document.createElement("br"));


/* Contacto */
const contact = document.createElement("fieldset");
const contactLegend = document.createElement("legend");
contactLegend.textContent = "Contacto";
contact.appendChild(contactLegend);

// Email
const emailLabel = document.createElement("label");
emailLabel.innerHTML = "Email: ";
contact.appendChild(emailLabel);

const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("name", "email");
emailInput.setAttribute("pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
emailInput.setAttribute("required", "required");
contact.appendChild(emailInput);

contact.appendChild(document.createElement("br"));
contact.appendChild(document.createElement("br"));

// Telefono
const phoneLabel = document.createElement("label");
phoneLabel.innerHTML = "Teléfono: ";
contact.appendChild(phoneLabel);

const phoneInput = document.createElement("input");
phoneInput.setAttribute("type", "text");
phoneInput.setAttribute("name", "phone");
phoneInput.setAttribute("pattern", "[0-9]{9}");
contact.appendChild(phoneInput);

contact.appendChild(document.createElement("br"));
contact.appendChild(document.createElement("br"));

// Fotografia
const imageLabel = document.createElement("label");
imageLabel.innerHTML = "Fotografía (jpg o png. Peso máximo 1mb): ";
contact.appendChild(imageLabel);

const imageInput = document.createElement("input");
imageInput.setAttribute("type", "file");
imageInput.setAttribute("name", "image");
imageInput.setAttribute("accept", ".jpg, .png");
contact.appendChild(imageInput);

contact.appendChild(document.createElement("br"));
contact.appendChild(document.createElement("br"));

// Aficiones
const hobbyLabel = document.createElement("label");
hobbyLabel.innerHTML = "Aficiones: ";
contact.appendChild(hobbyLabel);

const hobbies = ['Videojuegos', 'Juegos de mesa', 'Lectura', 'Cine/Series', 'Anime/Manga', 'Deportes', 'Animales', 'Jardinería', 'Bricolaje', 'Fotografía'];

for(let i = 0; i < hobbies.length; i++){
    const label = document.createElement("label");
    label.textContent = hobbies[i];
    contact.appendChild(document.createElement("br"));

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox")
    input.setAttribute("name", "hobby")
    input.setAttribute("value", hobbies[i]);

    label.appendChild(input);
    contact.appendChild(label);
}

contact.appendChild(document.createElement("br"));
contact.appendChild(document.createElement("br"));

// Observaciones
const commentLabel = document.createElement("label");
commentLabel.innerHTML = "Observaciones: ";
contact.appendChild(commentLabel);

contact.appendChild(document.createElement("br"));

const commentInput = document.createElement("textarea");
commentInput.setAttribute("name", "comment");
commentInput.setAttribute("maxlenght", "500");
commentInput.setAttribute("placeholder", "Máximo 500 caracteres");
contact.appendChild(commentInput);

contact.appendChild(document.createElement("br"));
contact.appendChild(document.createElement("br"));

// Fieldset
form.appendChild(personalInformation);
form.appendChild(document.createElement("br"));
form.appendChild(address);
form.appendChild(document.createElement("br"));
form.appendChild(contact);
form.appendChild(document.createElement("br"));

// Botones
const botonCancelar = document.createElement("button");
botonCancelar.setAttribute("type", "button");
botonCancelar.innerHTML = "Cancelar";

const botonEnviar = document.createElement("button");
botonEnviar.setAttribute("type", "submit");
botonEnviar.innerHTML = "Enviar";

const botonLimpiar = document.createElement("button");
botonLimpiar.setAttribute("type", "reset");
botonLimpiar.innerHTML = "Limpiar";

form.appendChild(botonCancelar);
form.appendChild(botonEnviar);
form.appendChild(botonLimpiar);

// Clase input a todos los inputs
const allInputs = form.querySelectorAll("input");

allInputs.forEach(function(input){
    input.classList.add("input")
});

// Clase label a todos los labels
const allLabels = form.querySelectorAll("label");

allLabels.forEach(function(label){
    label.classList.add("label")
});


document.body.appendChild(form);