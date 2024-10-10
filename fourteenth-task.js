var prompt = require('prompt-sync')();
var number = Number(prompt('Digite um número: '));
var fatorial = 1;

while(isNaN(number)){
    number = Number(prompt('Valor inválido! Digite um número: '));
}
for(let i = 1; i <= number; i++){
    fatorial*=i
}

console.log(`O fatorial do número ${number} é ${fatorial}`)