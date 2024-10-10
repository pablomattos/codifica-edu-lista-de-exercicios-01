var prompt = require('prompt-sync')();
var age = prompt('Qual é a sua idade? ');

if(age < 13 ){
    console.log('Você é uma criança!')
}else if( age < 18){
    console.log('Você é um adolescente!')
}else if(age < 65){
    console.log('Você é uma pessoa adulta!')
}else{
    console.log('Você é uma pessoa idosa!')
}
