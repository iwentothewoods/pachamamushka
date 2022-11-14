var imagenes = ['./img/carrusel1.jpg','./img/carrusel2.jpg','./img/carrusel3.jpg'],
    cont = 0;

function carrousel(carrusel){
    carrusel.addEventListener('click', e =>{
        let atras = carrusel.querySelector('.atras'),
            adelante = carrusel.querySelector('.adelante'),
            img = carrusel.querySelector('img'),
            tgt = e.target;

            if (tgt == atras) {
                if (cont > 0) {
                    img.src = imagenes[cont - 1];
                    cont --;
                } else {
                    img.src = imagenes[imagenes.length - 1];
                    cont = imagenes.length -1;                 
                }
            } else if (tgt == adelante) {
                if (cont < imagenes.length - 1) {
                    img.src = imagenes[cont + 1];
                    cont ++;
                } else {
                    img.src = imagenes[0];
                    cont = 0;                 
                }
            }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let carrusel = document.querySelector('.carrusel');
    carrousel(carrusel);
});