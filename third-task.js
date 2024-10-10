var prompt = require('prompt-sync')();
var grade = Number(prompt('Digte a sua nota: '));

while(isNaN(grade) || grade < 0 || grade > 10){
    grade = Number(prompt('Valor de nota inválido! Digte um valor de nota entre 0 e 10: '));    
}

if(grade < 5 ){
    console.log(`Você tirou a nota ${grade} e foi reprovado!`)
}else if(grade < 7 ){
    console.log(`Você tirou a nota ${grade} e ficou em recuperação!`)
}else if(grade >=  7 ){
    console.log(`Você tirou a nota ${grade} e foi Aprovado!`)
}