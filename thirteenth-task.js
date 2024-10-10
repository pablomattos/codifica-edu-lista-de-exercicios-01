var prompt = require('prompt-sync')();
var sum = 0;
var divider = 0;
var number;

console.log('Descubra a média dos números digitados, para encerrar digite 0.');

while(true){
    var input = prompt('Digite um número: ');
    number = Number(input);
    
    if (isNaN(number)) {
        console.log('Por favor, digite um número válido.');
        continue;
    }
    
    if (number === 0) break;
    sum += number;
    divider++;
}

if (divider === 0) {
    console.log('Nenhum número foi digitado.');
} else {
    var average = sum / divider;
    console.log(`A média dos números digitados é: ${average}`);
}
