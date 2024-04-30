//Advinhe o número entre 1 a 10:
const prompt = require("prompt-sync")();

const numeroCorreto = Math.floor((Math.random() * 10) + 1);
let tentativa;

do{
    tentativa = parseInt(prompt("Advinhe o número entre 1 a 10:"));
    if(tentativa < numeroCorreto){
        console.log("Tente um número maior.");
    }else{
        console.log("Tente um número menor.");
    }
}while(tentativa !== numeroCorreto);

console.log("Parabéns! Você acertou!");