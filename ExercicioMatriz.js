const leia = require('readline-sync')

let matriz = new Array(3)


for(let indice = 0; indice < matriz.length; indice++){
    matriz[indice] = Array(3);
}


let diagonalPrincipal = "", diagonalSecundaria = "";
let somaDiagonalPrincipal = 0, somaDiagonalSecundaria = 0;


for(let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){

    for(let indiceColuna = 0; indiceColuna < matriz.length; indiceColuna++)
        matriz[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero inteiro: ");

}

for (let indice = 0; indice < matriz.length; indice ++){
    diagonalPrincipal += matriz[indice][indice] + " ";
    somaDiagonalPrincipal += matriz[indice][indice];
}

for (let indice = 0; indice < matriz.length; indice++){
    diagonalSecundaria += matriz[indice][matriz.length - 1 - indice] + " ";
    somaDiagonalSecundaria += matriz[indice][matriz.length - 1 - indice];
}

console.table(matriz)
console.log(`Os elementos da Diagonal Principal são: ${diagonalPrincipal}. E a soma deles é igual a: ${somaDiagonalPrincipal}`)
console.log(`Os elementos da Diagonal Secundaria são: ${diagonalSecundaria}. E a soma deles é igual a: ${somaDiagonalSecundaria}`)