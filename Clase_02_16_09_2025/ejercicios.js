//EJERCICIO 1

function calcularLetra(){
    const dni = document.getElementById("dniInput").value;
    const resultado= recibirDNI(dni);
    document.getElementById("resultado1").textContent = resultado;
}
const recibirDNI = (dni) => (comprobarDNI(dni) ? crearLetra(dni) : "Error");
const comprobarDNI = (dni) => dni.toString().length === 8;
const crearLetra = (dni)=>  "TRWAGMYFPDXBNJZSQVHLCKE".charAt(dni % 23);

//Ejercicio 2

function devolverTextoAlReves(){
    const texto= document.getElementById("fraseInput").value;
    const resultado= revertirTexto(texto);
    document.getElementById("resultado2").textContent = resultado;
}

const revertirTexto = (texto) => texto.split('').reverse().join('');


//Ejercicio 3


function devolverCandenaRandom(){
    const resultado = crearCadenaRandom();
    document.getElementById("resultado3").textContent = resultado;
}

let cantidadNumeros3= 100;
const min3 = 0
const max3 = 1000

function crearCadenaRandom(){
    let cadena = [];
    n = 0
    while(n<cantidadNumeros3){
        let nRandom = Math.floor(Math.random() * (max3 - min3 + 1) + min3);//aunque aqui es depleciable sumarle el min, si en un futuro cambia sigue funcionando
        while(cadena.includes(nRandom)){
            nRandom++;
            if(nRandom>max3)nRandom = min3;
        }
        cadena.push(nRandom);
        n++;
    }
    return cadena;
}

//Ejercicio 4


function devolverVocales(){
    const texto= document.getElementById("fraseInput2").value;
    const resultado= contarVocales(texto);
    document.getElementById("resultado4").textContent = resultado;
}

function contarVocales(texto){
    let vocales = 0;
    cadena = texto.toLowerCase().split('');
    cadena.forEach(letra => { 
        if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') vocales++;
      });
    return vocales;

}


//Ejercicio 5

function devolverDivisores(){
    const numero= document.getElementById("divisoresInput").value;
    const resultado = obtenerDivisores(numero);
    document.getElementById("resultado5").textContent = resultado;
}


function obtenerDivisores(numero){
    let divisores = [];
    for(let i = 1; i <= numero; i++){
        if(numero % i == 0) divisores.push(i);
    }
    return divisores;
}




