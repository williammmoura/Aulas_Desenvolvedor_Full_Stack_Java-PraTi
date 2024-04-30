// Exercício 4: Calculadora Simples

// const prompt = require("prompt-sync")();

// let num1 = parseInt(prompt("Insira o primeiro número:"));
// let num2 = parseInt(prompt("Insira o segundo número:"));
// let operacao = prompt("Insira a operação desejada (+, -, *, /):");

// let resultado;

// if(operacao === "+"){
//     resultado = num1 + num2;
// }else if(operacao === "-"){
//     resultado = num1 - num2;
// }else if(operacao === "*"){
//     resultado = num1 * num2;
// }else if(operacao === "/"){
//     if(num2 !== 0){
//         resultado = num1 / num2;
//     }else{
//         console.log("Erro: Divisão por zero.");
//         resultado = undefined;
//     }
// }else{
//     console.log("Operação inválida!")
// }

// if(resultado !== undefined){
//     console.log("Resultado:", resultado);
// }

const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Insira o primeiro número:"));
let num2 = parseInt(prompt("Insira o segundo número:"));

let operacao = prompt("Insira a operação desejada (+, -, *, /):");

let resultado

switch(operacao){
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break
    default:
        console.log("Operação inválida!");
}

console.log("O resultado é:", resultado);