var prompt = require('prompt-sync')();
let sum = 0;
let number;
for(let i = 0; i < 5; i ++){
    number = Number(prompt(`Digite o ${i+1}º número: `));
    while(isNaN(number)){
        number = Number(prompt(`Valor inválido! Digite o ${i+1}º número: `));
    }
    sum += number;
}

console.log(`Soma total dos números: ${sum}`)