var prompt = require('prompt-sync')();
var weight = Number(prompt('Digite o seu peso: '));
    while(isNaN(weight) || (weight < 0)){
        weight = Number(prompt('Valor inválido! Digite novamente o seu peso: '));
    }
var height = Number(prompt('Digite a sua altura: '));
    while(isNaN(height) || (height < 0)){
        height = Number(prompt('Valor inválido! Digite novamente a sua altura: '));
    }

var imc = weight / (Math.pow(height, 2));

if(imc < 18.5){
    console.log(`IMC: ${imc.toFixed(2)}, classificação: BAIXO PESO`);
}else if(imc <= 24.9){
    console.log(`IMC: ${imc.toFixed(2)}, classificação: PESO NORMAL`);
}else if(imc <= 34.9){
    console.log(`IMC: ${imc.toFixed(2)}, classificação: SOBREPESO`);
}else if(imc > 34.9){
    console.log(`IMC: ${imc.toFixed(2)}, classificação: OBESIDADE`);
}
