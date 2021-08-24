//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonCalcular = document.querySelector(".calcular-tiempo");
let mostrarResultado = document.querySelector(".resultado");
let duracionEnHoras = document.querySelectorAll(".horas");
let duracionEnMinutos = document.querySelectorAll(".minutos");
let duracionEnSegundos = document.querySelectorAll(".segundos");
let totalHoras = 0;
let totalMinutos = 0;
let totalSegundos = 0;

$botonCalcular.onclick = function(){
    for(let i=0; i < duracionEnHoras.length; i++){
        totalHoras = totalHoras + Number(duracionEnHoras[i].value);
    }
    for(let i=0; i < duracionEnMinutos.length; i++){
        totalMinutos = totalMinutos + Number(duracionEnMinutos[i].value);
    }
    for(let i=0; i < duracionEnSegundos.length; i++){
        totalSegundos = totalSegundos + Number(duracionEnSegundos[i].value);
    }

    mostrarResultado.textContent = `El tiempo total de los videos es de ${totalHoras} horas, ${totalMinutos} minutos, ${totalSegundos} segundos`;

    return false;
}
