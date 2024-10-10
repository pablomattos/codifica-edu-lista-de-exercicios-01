var prompt = require('prompt-sync')();
var value1 = Number(prompt('Digite o primeiro valor: '));
while (isNaN(value1)) {
    value1 = Number(prompt('Esse valor não é um número! Digite corretamente o primeiro valor: '));
}

var value2 = Number(prompt('Digite o segundo valor: ')); 
while (isNaN(value2)) {
    value2 = Number(prompt('Esse valor não é um número! Digite corretamente o segundo valor: '));
}

if (value1 === value2) {
    console.log(`O valor digitado foi ${value1}`);
} else if (value1 < value2) {
    console.log(`Valores digitados: ${value1} e ${value2}`);
} else {
    console.log(`Valores digitados: ${value2} e ${value1}`);
}
