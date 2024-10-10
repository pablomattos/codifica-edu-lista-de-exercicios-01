var prompt = require('prompt-sync')();
var number = Number(prompt('Digite um número inteiro: '));

while(isNaN(number) || !(Number.isInteger(number))){
    number = Number( prompt('Valor inválido! Digite um número inteiro: '));
}

for(let i = 0; i < 10; i ++){
    console.log(number);
}