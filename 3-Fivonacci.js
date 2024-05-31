const prompt = require ("prompt-sync")({sigint: true})

/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fivonachi(num) {
    const primeroNum=[0,1]
    console.log(primeroNum[0,1]);
    
    for (let i = 2; i < num; i++) {
        const nextnum = primeroNum[i-1] + primeroNum[i-2] 

        console.log(nextnum);
        primeroNum.push(nextnum);
    }
    return primeroNum
}

fivonachi (50)