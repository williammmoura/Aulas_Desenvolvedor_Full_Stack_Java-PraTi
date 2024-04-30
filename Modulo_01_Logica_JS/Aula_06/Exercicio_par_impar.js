// Exercício 01: Par ou Impar

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Insira um número:"));

if(numero % 2 == 0){
    console.log("O número é par!");
}else{
    console.log("O número é ímpar!");
}