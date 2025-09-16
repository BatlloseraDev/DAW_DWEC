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



//Ejercicio PUM

function devolverPUM(){
    const numero= 100;
    const resultado = obtenerPUM(numero);
    document.getElementById("resultadoPUM").innerHTML = resultado;
}

function obtenerPUM(numero){
    let cadena = [];
    for(let i =1; i<=numero; i++){
        let temporal = String(i).split('');
        if(temporal[temporal.length-1]==7 || i % 7 == 0) cadena.push('PUM<br>');
        else cadena.push(i);
    
    }
    return cadena;
}


//Ejercicio Salario

function devolverSalario(){
    let horas= document.getElementById("horasInput").value;
    let turno= document.getElementById("turnoInput").value;

    let resSalNetRaw = document.getElementById("resultadoSalarioNeto").textContent;
    let resSalNet = resSalNetRaw ? resSalNetRaw.split(",").map(Number) : [];

    let resSalTotRaw = document.getElementById("resultadoSalarioTotal").textContent;
    let resSalTot = resSalTotRaw ? Number(resSalTotRaw) : 0;

    if(!comprobarErrores(turno)){
        const resultado =  calcularSalario(horas,turno,resSalNet,Number(resSalTot));
        document.getElementById("resultadoSalarioNeto").innerHTML = resultado[0];
        document.getElementById("resultadoSalarioTotal").innerHTML = resultado[1];
    }
    else{
        alert('Alguno de los datos era erroneo o incorrecto, no se añadió');
    }

}


comprobarErrores = (texto) => (
    texto.length>1 ||
    !['m','t','n'].includes(texto.charAt(0))
);

function calcularSalario(horas,turno,resSalNet,resSalTot){

    let cadenaSalarios= resSalNet;
    let salarioTotal = resSalTot;
    let resultado = [];
    
    let salarioTemporal=0;
    
    switch(turno){
        case 'm':salarioTemporal = horas*15;break;
        case 't':salarioTemporal = horas*17;break;
        case 'n':salarioTemporal = horas*20;break;
        default:console.log('Hubo un error en el switch');break;
    }

    if(salarioTemporal<600){
        salarioTemporal-= salarioTemporal*0.08;
    }else if(salarioTemporal>=600 && salarioTemporal<=1000){
        salarioTemporal-= salarioTemporal*0.10;
    }else if(salarioTemporal>1000){
        salarioTemporal-= salarioTemporal*0.12;
    }

    cadenaSalarios.push(salarioTemporal);
    salarioTotal+=salarioTemporal;

    resultado.push(cadenaSalarios);
    resultado.push(salarioTotal);

    return resultado;
}

/*
function montarCadenaExistentes(cadena){

}*/