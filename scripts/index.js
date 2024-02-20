/*
Autor: Iván Lorenzo Ruiz (estudiante)
GitHub: https://github.com/Ivanlr96/practicaSass
*/

// Código relativo al botón hamburguesa, que abre y cierra el menú
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
})


/* Código que permite ejecutar las animaciones del css al pulsar los botones de más información de cada carta. Cuando pasa el tiempo determinado con SetTimeout, oculta las imágenes png para que no permanezcan al completar la animación */
const info1 = document.getElementById("info1")

info1.addEventListener("click", () => {
  document.getElementById('iron').classList.toggle('fly')
  setTimeout(() => {
    document.getElementById('iron').classList.toggle('ocultar')

  }, 6000);

})


const info2 = document.getElementById("info2")

info2.addEventListener("click", () => {
  document.getElementById('martillo').classList.toggle('fly2')
  setTimeout(() => {
    document.getElementById('martillo').classList.toggle('ocultar')

  }, 6002);

})

const info3 = document.getElementById("info3")

info3.addEventListener("click", () => {
  document.getElementById('escudo').classList.toggle('fly3')

  setTimeout(() => {
    document.getElementById('escudo').classList.toggle('ocultar')

  }, 2000);

})

//Variables para los sonidos que se ejecutan al pulsar los botones correspondientes
const audio1 = new Audio();
audio1.src = "assets/sounds/sonido1.mp3"
const audio2 = new Audio();
audio2.src = "assets/sounds/sonido2.mp3"

const audio3 = new Audio();
audio3.src = "assets/sounds/sonido3.mp3"

const audio4 = new Audio();
audio4.src = "assets/sounds/sonido4.mp3"

// Función para activar o desactivar el modo oscuro
function enableDarkMode() {
  let body = document.body;
  let header = document.querySelector("header");

  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");


  if (document.getElementById('checkitem').checked) {
    console.log("checked");
  } else {
    console.log("Not checked");
  }
}


// Función para controlar el comportamiento de la galería

const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");

function openFulImg(reference) {
  fulImgBox.style.display = "flex";
  fulImg.src = reference;
}

function closeImg() {
  fulImgBox.style.display = "none";
}

fulImgBox.addEventListener("click", (event) => {
  if (event.target === fulImgBox) {
    closeImg();
  }
});
