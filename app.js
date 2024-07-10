let numeroAleatorio = 0;
let intentos = 0;
let listaNumerosGenerado = [];
let numeroMaximo = 10;


function definirTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
}

function verificarNumero(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === numeroAleatorio){
        definirTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(numeroUsuario > numeroAleatorio){
        definirTextoElemento('p', "El número es menor!");
        intentos++;
        limpiarCaja();
    }else{
        definirTextoElemento('p', "El número es mayor!");
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosGenerado);

    if(listaNumerosGenerado.length == numeroMaximo){
        return;
    }else{
       if(listaNumerosGenerado.includes(numeroGenerado)){
        return generarNumeroAleatorio();
    }else{
        listaNumerosGenerado.push(numeroGenerado);
        return numeroGenerado;
    }
        


    }

    
    
}
function condicionesIniciales() {
    limpiarCaja();
    numeroAleatorio = generarNumeroAleatorio();
    definirTextoElemento('h1', "Adivina el número!");
    definirTextoElemento('p', `Elige un numero del 1 al ${numeroMaximo}:`);
    intentos = 1;
}
function reiniciarJuego(){
    //vaciar caja
    //generar aleatorio
    //mensaje intervalo de numeros
    //reiniciar contador
    condicionesIniciales();
    //deshabilitar boton
    document.getElementById('reiniciar').setAttribute('disable', true);
    console.log(numeroAleatorio);
    
}

condicionesIniciales();
