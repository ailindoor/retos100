const prompt = require ("prompt-sync")({sigint: true})


/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */


for (let i = 1; i < 101; i++) {

    if(i === 1){
         console.log(`${i} no`);
    }else if((i === 1 ) || (i === 2) || (i === 3) || (i === 5) || (i === 7)){
        console.log(`${i} primo`);
    }else if ((i%2 == 0) || (i%3 == 0) || (i%5 ==0) || (i%7 == 0) || (i%9 == 0)) {
        console.log(`${i} no `);
    }else{
        console.log(`${i} primo`);
    }
        
}


function primo(num) {
    if (num <= 1) {
        return false
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }

    return true
}

for (let i = 1; i < 100; i++) {
    if(primo(i)){
        console.log(i);
    }
    
}