var prompt = require('prompt-sync')();
console.log('Insira os valores dos lados de um triângulo, abaixo:')

var sideA = Number(prompt('Digite o valor do lado A: '));
    while(isNaN(sideA) || sideA < 0){
        sideA = Number(prompt('Valor inválido! Digite o valor correto do lado A: '));
    }

var sideB = Number(prompt('Digite o valor do lado B: '));
    while(isNaN(sideB) || sideB < 0){
        sideB = Number(prompt('Valor inválido! Digite o valor correto do lado B: '));
    }

var sideC = Number(prompt('Digite o terceiro lado C: '));
    while(isNaN(sideC) || sideC < 0){
        sideC = Number(prompt('Valor inválido! Digite o valor correto do lado C: '));
    }  

if( (sideA < (sideB + sideC)) && (sideB < (sideA + sideC)) && (sideC < (sideA + sideB))){
    if((sideA === sideB) && (sideA === sideC) && (sideB === sideC) ){
        console.log('TRIÂNGULO EQUILÁTERO')
    }else if(!((sideA === sideB) || (sideA === sideC) || (sideB === sideC))){
        console.log('TRIÂNGULO ESCALENO')
    }else if((sideA === sideB) || (sideA === sideC) || (sideB === sideC)){
        console.log('TRIÂNGULO ISÓSCELES')
    }
}else {
    console.log('Os valores inseridos não formam um triângulo.');
}