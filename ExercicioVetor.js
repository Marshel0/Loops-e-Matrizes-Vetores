const leia = require('readline-sync')

let vetor = [10, 3, 13, 7, 15, 19, 4, 16, 6, 9];
let posicao = -1;

let numero = leia.questionInt("Digite um numero: ");

for (let indice = 0; indice < vetor.length; indice++){
    if(vetor[indice] == numero){
        posicao = indice;
    }
}

if(posicao !== -1){
    console.log(`O numero digitado ${numero} foi encontrado na posicão ${posicao} do vetor`)
}else{
    console.log("Nao foi encontrado!")
}