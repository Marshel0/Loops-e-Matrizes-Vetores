const leia = require('readline-sync')

let idade = 0;
let quantidade, idademenor = 0, idademaior = 0;


while(idade >= 0){
    idade = leia.questionInt('Digite uma idade ou um numero negativo para sair: ')
    if (idade < 21 && idade > 0){
        idademenor++
    }

    if (idade > 50){
        idademaior++
    }

}

console.log(`Numero total de pessoas menores de 21 anos: ${idademenor}`)
console.log(`Numero total de pessoas maiores de 50 anos: ${idademaior}`)