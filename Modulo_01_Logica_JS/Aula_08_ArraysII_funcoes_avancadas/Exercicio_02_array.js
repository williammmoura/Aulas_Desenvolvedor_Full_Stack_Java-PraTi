//Encontrar o maior número de um Array

let numerosDoArray = [0, 2, 4, 6, 1, 10, 5, 3];

const maiorNumeroArray = () => {
    let maiorNumero = numerosDoArray[0]//Inicializa comparando com o primeiro elemento do array
    for(let index = 1; index < numerosDoArray.length; index++){ // O "index = 1" por que a variável maiorNumero já inicia o no primeiro elemento do array "numeroDoArray"
        if(numerosDoArray[index] > maiorNumero){
            maiorNumero = numerosDoArray[index];
        }
    }
    return maiorNumero;
}

console.log(`O maior número do array [${numerosDoArray}] é: ${maiorNumeroArray()}`);