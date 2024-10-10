var prompt = require('prompt-sync')();
var number = prompt("Digite um número: ");

if(number % 2 === 0){
    console.log(`O número ${number} é um par!`)
}else{
    console.log(`O número ${number} é um ímpar!`)
}
