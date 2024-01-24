/*
Autor: Iván Lorenzo Ruiz (estudiante)
GitHub: https://github.com/Ivanlr96/practicaLayout
*/
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const apellidos = document.querySelector("#apellidos");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");
const listaErrores = document.querySelector(".errores");
// Array para la lista de mensajes
let mensajesErorr = [];

const validacion = (e) => {
    // Para evitar el envio de formulario:
    e.preventDefault();

    // Se vacia el array
    mensajesErorr = [];

    // Validación de los campos:
    // Nombre obligatorio y en mayúscula
    !/^[A-Z][a-z]{2,}$/.test(nombre.value.trim()) && mensajesErorr.push("El nombre es obligatorio y debe empezar por mayúscula");
    // Primer apellido obligatorio y en mayúscula
    !/^[A-Z][a-z]{2,}$/.test(apellidos.value.trim()) && mensajesErorr.push("El apellido es obligatorio y debe empezar por mayúscula");
    // Teléfono válido
    !/^[679]\d{8}$/.test(telefono.value.trim()) && mensajesErorr.push("El teléfono no es válido");

    // Correo electrónico con la estructura correcta
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) && mensajesErorr.push("El correo electrónico no es válido");
    // Mensaje que como mínimo tenga 10 caracteres
    mensaje.value.trim().length < 10 && mensajesErorr.push("El mensaje es muy corto. 10 caracteres como mínimo");

    // Muestra errores si los hay o envia el formulario si no existen
    if (mensajesErorr.length === 0 && confirm("¿Está seguro de que desea enviar el formulario?")) {
        formulario.submit();
    } else {
        listaErrores.innerHTML = "";
        mensajesErorr.forEach((msg) => {
            listaErrores.innerHTML += `<li>${msg}</li>`;
        });
    }
};

formulario.addEventListener("submit", validacion);