

const $listaDeNumeros = document.querySelectorAll('li');

function arrayListadoANumeros($listaDeNumeros) {
    let listaDeNumeros = [];
    for (i = 0; i < $listaDeNumeros.length; i++) {
        listaDeNumeros[i] = Number($listaDeNumeros[i].innerText);
    }
    return listaDeNumeros;
}

function promedioDeLista($listaDeNumeros) {
    let totalSuma = 0;
    for (let i = 0; i < $listaDeNumeros.length; i++) {
        totalSuma += $listaDeNumeros[i]
    }
    let promedio = totalSuma / $listaDeNumeros.length
    return promedio;
}

function detectarNumeroMayor($listaDeNumeros) {
    let numeroMayor = $listaDeNumeros[0];
    for (let i = 0; i < $listaDeNumeros.length; i++) {
        if (numeroMayor < $listaDeNumeros[i]) {
            numeroMayor = $listaDeNumeros[i];
        }
    }
    return numeroMayor;
}

function detectarNumeroMenor($listaDeNumeros) {
    let numeroMenor = $listaDeNumeros[0];
    for (let i = 0; i < $listaDeNumeros.length; i++) {
        if (numeroMenor > $listaDeNumeros[i]) {
            numeroMenor = $listaDeNumeros[i];
        }
    }
    return numeroMenor;
}

function detectarMasApariciones($listaDeNumeros) {
    let repite = 0;
    let veces = 0;
    let contador=0;
    for (let i = 0; i < $listaDeNumeros.length; i++) {
        contador = 0;
        for (let n = 0; n < $listaDeNumeros.length; n++) {
            if ($listaDeNumeros[n] === $listaDeNumeros[i]) {
                contador++;
            }
        }if (contador > veces) {
        repite = $listaDeNumeros[i];
        veces = contador;
    }
    } 
    return repite;
}

document.querySelector('#calcular').onclick = function () {
    let listaNumeros = arrayListadoANumeros($listaDeNumeros);
    document.querySelector('#promedio').innerText = `${Math.floor(promedioDeLista(listaNumeros))}`
    document.querySelector('#numero-mayor').innerText = `${detectarNumeroMayor(listaNumeros)}`
    document.querySelector('#numero-menor').innerText = `${detectarNumeroMenor(listaNumeros)}`
    document.querySelector('#mas-apariciones').innerText = `${detectarMasApariciones(listaNumeros)}`;
    return false;
}



