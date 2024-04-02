const leia = require('readline-sync')

let numero, positivo = 0;

do{
    numero = leia.questionInt('Digite um numero ou digite 0 para sair: ')
    if(numero > 0){
        positivo += numero
    }

}while(numero != 0)

console.log(`A soma dos numeros positivos é: ${positivo}`)