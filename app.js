const palos = ["♠","♥","♦","♣"];
const  numeros = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

function generarCarta(){

let randomPalos = palos[Math.floor(Math.random() * palos.length)];
let randomNumeros =  numeros[Math.floor(Math.random() *  numeros.length)];

document.getElementById("top-palos").innerText = randomPalos;
document.getElementById("bottom-palos").innerText = randomPalos;
document.getElementById("number").innerText = randomNumeros;

if(randomPalos === "♥" || randomPalos === "♦"){
document.querySelector(".card").style.color = "red";
}else{
document.querySelector(".card").style.color = "black";
}

}

// genera la primera carta al cargar la página
generarCarta();

// cambia la carta cada 5 segundos
setInterval(generarCarta, 5000);