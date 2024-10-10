var prompt = require('prompt-sync')();
var multiplicationTableNumber = Number(prompt('Qual tabuada deseja saber, digite um número de 0 a 10: '));

while(isNaN(multiplicationTableNumber) || (multiplicationTableNumber < 1)|| (multiplicationTableNumber > 10)){
    multiplicationTableNumber = Number(prompt('Valor inválido! digite um número de 0 a 10: '));
}

console.log(`TABUADA DO NÚMERO ${multiplicationTableNumber}:`)
for(let i = 1; i <= 10; i ++){
    console.log(`${multiplicationTableNumber} x ${i} = `, multiplicationTableNumber*i);
}