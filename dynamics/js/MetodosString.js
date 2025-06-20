let botonContador = document.getElementById("botonContador");
let botonAcronimos = document.getElementById("botonAcronimos");
let botonBuscador = document.getElementById("botonBuscador");

let inputContador = document.getElementById("inputContador");
let resultadoContador = document.getElementById("resultadoContador");

let divContador = document.getElementById("contador");
let divAcronimo = document.getElementById("acronimo");
let divBuscador = document.getElementById("buscador");

let texto_input = document.getElementById("texto");
let resultAcron = document.getElementById("result-acron");

let contenedorInput = document.getElementById("contenedorinput");
let palabraBuscar = document.getElementById("palabraBuscador");
let ejecutarBuscar = document.getElementById("ejecutar-btn");
let resultPantalla = document.getElementById("result-pantalla");

let texto = "";

botonContador.addEventListener("click", () => {
  divContador.style.display = "block";
  divAcronimo.style.display = "none";
  divBuscador.style.display = "none";

  let textoContador = inputContador.value;
  let totalChars = textoContador.length;
  let totalWords = textoContador.trim().split(/\s+/).filter(p => p !== "").length;
  resultadoContador.innerHTML = `<p>Caracteres: ${totalChars}</p><p>Palabras: ${totalWords}</p>`;
});

botonAcronimos.addEventListener("click", () => {
  divContador.style.display = "none";
  divAcronimo.style.display = "block";
  divBuscador.style.display = "none";
});

botonBuscador.addEventListener("click", () => {
  divContador.style.display = "none";
  divAcronimo.style.display = "none";
  divBuscador.style.display = "block";
});

texto_input.addEventListener("input", () => {
  texto = texto_input.value;
});

document.getElementById("botonAcronimo").addEventListener("click", () => {
  let palabras = texto.trim().split(/\s+/);
  let acronimo = palabras.map(p => p.charAt(0).toUpperCase()).join("");
  resultAcron.textContent = `Acrónimo: ${acronimo}`;
});

ejecutarBuscar.addEventListener("click", () => {
  let textoBase = contenedorInput.value.toLowerCase();
  let palabra = palabraBuscar.value.toLowerCase();
  let coincidencias = (textoBase.match(new RegExp(palabra, "g")) || []).length;

  resultPantalla.innerHTML = `"${palabra}" aparece <strong>${coincidencias}</strong> vez/veces.`;
});