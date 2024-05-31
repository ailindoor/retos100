/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */


//primero debemos recorer la cadena de texto

let invertir = string => {
    let nuevaArray = []
    for (let i = 0; i < string.length; i++) {
       const element = string[i];

       nuevaArray.push(i)

       console.log(element);
    }

    console.log(nuevaArray);
    
}

invertir("hola mundo")