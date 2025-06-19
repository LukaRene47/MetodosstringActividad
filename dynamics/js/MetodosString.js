//secciones de el archivo
let seccContador = document.getElementById("contador");
let seccAcronimo = document.getElementById("acronimo");
let seccBuscador = document.getElementById("buscador")

//botones de seleccion de archivos
let botonContador = document.getElementById("botonContador");
let botonAcronimos = document.getElementById("botonAcronimos");
let botonBuscador = document.getElementById("botonBuscador");


// no se q son , saludos
let resultAcron = document.getElementById("result-acron") 
let texto_input = document.getElementById("texto");
let texto = "";

//cosas para la ejecucion del buscador
let buscadorTexto = document.getElementById("contenedorinputBuscador");
let palabraBuscar = document.getElementById("palabraBuscador");
let ejecucionBuscar = document.getElementById("ejecutarBuscar")

// oyee esta mal xd deja lo arreglo
// alguien puede hacer una funcion mejorando esto? pa ahorrar espacio polfa

botonContador.addEventListener("click", function(){
    seccContador.style.display ='block';
    seccBuscador.style.display ='none';
    seccAcronimo.style.display ='none';

});
botonAcronimos.addEventListener("click", function(){
    seccContador.style.display ='none';
    seccBuscador.style.display ='none';
    seccAcronimo.style.display ='block';
});
botonBuscador.addEventListener("click", function(){
    seccContador.style.display ='none';
    seccBuscador.style.display ='block';
    seccAcronimo.style.display ='none';
});

// eventos de ejecucion de cada seccion
texto_input.addEventListener("input",()=>{
    texto = texto_input.value;
});

botonAcronimos.addEventListener("click",()=>{
    texto.slice("");
    resultAcron.innerHTML = `"${texto}"`;
});

botonContador.addEventListener("click",()=>{
    
    // split() separa la cadena a partir de espacios y cuenta la cadena más larga
});

//ejecucion de la seccion buscador
ejecucionBuscar.addEventListener("click",()=>{

    
});