const $segundosDeClase = document.querySelectorAll('.segundos');
const $minutosDeClase = document.querySelectorAll('.minutos');
const $horasDeClase = document.querySelectorAll('.horas');

document.querySelector('#calcular-tiempo').onclick = function () {
    let segundosTotales = sumaTiempo($segundosDeClase);
    let minutosTotales = sumaTiempo($minutosDeClase);
    let horasTotales = sumaTiempo($horasDeClase);
    if (segundosTotales > 59) {
        minutosTotales += Math.floor(segundosTotales / 60)
        segundosTotales = Math.floor(segundosTotales % 60)
    }
    if (minutosTotales > 59) {
        horasTotales += Math.floor(minutosTotales / 60)
        minutosTotales = Math.floor(minutosTotales % 60)
    }
    mensajeResultado(horasTotales, minutosTotales, segundosTotales);
    return false;
}

function sumaTiempo(medidaDeTiempo) {
    let total = 0;
    for (let i = 0; i < medidaDeTiempo.length; i = i + 1) {
        total = total + Number(medidaDeTiempo[i].innerText);
    } return total;
}

function mensajeResultado(horas, minutos, segundos) {
    return document.querySelector('#resultado').innerText = `El tiempo total del curso es ${horas} horas ${minutos} minutos ${segundos} segundos.`
}
