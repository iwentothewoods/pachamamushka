'use strict'

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

//Recorremos todos los puntos
punto.forEach((cadaPunto, i) => {
    //Asignamos un click a cadaPunto
    punto[i].addEventListener('click', () => {
        //Guardamos la posición de ese punto
        let posicion = i

        //posicion es 0, transformX es 0
        //posicion es 1, transformX es -33.33
        //posicion es 2, transformX es -66.66
        //op = posición - 33.33
        let operacion = posicion * -33.33

        //movemos el grande
        grande.style.transform = `translateX(${ operacion }%)`

        //recorremos los puntos y quitamos el activo a todos
        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo')
        })
        //añadimos la clase activo en el punto seleccionado
        punto[i].classList.add('activo')

    })
});