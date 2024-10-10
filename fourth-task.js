var prompt = require('prompt-sync')();

console.log("Menu Interativo:");
console.log("1. Opção 1");
console.log("2. Opção 2");
console.log("3. Opção 3");

var option = Number(prompt("Escolha uma opção (1, 2, 3): "));

while (isNaN(option) || (option !== 1 && option !== 2 && option !== 3)) {
    option = Number(prompt("Opção inválida! Escolha uma das opções (1, 2, 3): "));
}

switch (option) {
    case 1:
        console.log("Você escolheu a Opção 1");
        break;

    case 2:
        console.log("Você escolheu a Opção 2");
        break;

    case 3:
        console.log("Você escolheu a Opção 3");
        break;

    default:
        console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
}
