const prompt = require ("prompt-sync")({sigint:true})

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let anagrama =(palabra1,palabra2) => {
    
    let letras1 = palabra1
    let letras2 = palabra2
    
    if(letras1.lenght!== letras2.lenght){
        return console.log(false);
    }
    for (let i = 0; i < letras1.length; i++) {
        if (!letras2.includes(letras1[i])) {
            return console.log(false);
        }
        
    }

    console.log(true);
}


anagrama("amor","roma")