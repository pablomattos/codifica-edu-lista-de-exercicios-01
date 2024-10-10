var prompt = require('prompt-sync')();
var amountOfApples = Number(prompt('Quantas maçâs deseja comprar? '));

    while(isNaN(amountOfApples) || amountOfApples <= 0){
        amountOfApples = Number(prompt('Quantidade inválida! Digite a quantidade de maçãs correta que  deseja comprar? '));
    }

if(amountOfApples < 12){
    console.log(`Voçê comprou ${amountOfApples} maçãs por R$`, (amountOfApples*0.30).toFixed(2))
}else{
    console.log(`Voçê comprou ${amountOfApples} maçãs por R$`, (amountOfApples*0.25).toFixed(2))
}
