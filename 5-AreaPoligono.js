const prompt = require ("prompt-sync")({sigint:true})



/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */


function areaPoligono(poligono) {
    if (poligono === "triangulo") {
        console.log("introduce: ");
        let base = prompt("base del poligono: ")
        let altura = prompt("altura del poligono: ")

        let area = (base*altura)/2
        return console.log(`El area del poligono es: ${area}`);
    }else if(poligono === "cuadrado" ) {
        console.log("intdruoduce: ");
        let lados = prompt("lados del poligono:")
        
        let area = (lados * lados)
        return console.log(`El area del poligono es: ${area}`);
    }else if(poligono === "rectangulo"){
        console.log("intdruoduce: ");
        let lado = prompt("lado del poligono: ")
        let base = prompt("base del poligono: ")
        
        let area = (lado * base)
        return console.log(`El area del poligono es: ${area}`);
    }
}

areaPoligono("triangulo")
areaPoligono("cuadrado")
areaPoligono("rectangulo")
