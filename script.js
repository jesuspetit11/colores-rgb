//Tomamos los elementos
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");


//Tomamos los elementos p que mostraran el value en pantalla del los range
const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");


//Tomamos los valores de los inputs range
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputVerde.value;


//Dentro de los elementos p de cada color, le daremos el innerText del valor que tengan los value range y se mostarán en pantalla 
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

//Función para cambiar los colores del body del documento
function actualizarColor(rojo,verde,azul) {
    const colorRGB = `rgb(${rojo},${verde},${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

//Para actualizar usamos eventListeners

inputRojo.addEventListener("change", (e)=>{ //Objeto del evento
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
})

inputVerde.addEventListener("change", (e)=>{ //Objeto del evento
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
})

inputAzul.addEventListener("change", (e)=>{ //Objeto del evento
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
})
