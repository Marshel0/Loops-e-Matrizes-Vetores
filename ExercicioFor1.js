const leia = require('readline-sync');

let totalNumeros = 10;
let numerosPares = 0;
let numerosImpares = 0;


for (let indice = 0; indice < totalNumeros; indice++){
    numero = leia.questionInt(`Digite o ${indice + 1}* numero: `);

    if (numero % 2 === 0){
        numerosPares++
    }
    else{
        numerosImpares++
    }

}

console.log(`Total de numeros impares: ${numerosImpares}`)
console.log(`Total de numeros pares: ${numerosPares}`)
