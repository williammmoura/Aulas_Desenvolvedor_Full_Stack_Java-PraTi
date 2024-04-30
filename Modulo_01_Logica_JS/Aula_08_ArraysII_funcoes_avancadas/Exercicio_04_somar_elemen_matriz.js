//Somar todos os elementos de uma matriz

let matrizArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const somaMatrizArray = () => {
    let somaElementosMatriz = 0; //Essa variável será usada para armazenar a soma de todos os elementos da matriz.

    for(let i = 0; i < matrizArray.length; i++){//O loop começa com i igual a zero e continuará enquanto i for menor que o comprimento da matriz matrizArray.
        for(let j = 0; j < matrizArray[i].length; j++){//Este loop irá iterar sobre os elementos de cada submatriz da matrizArray. O loop interno começa com j igual a zero e continua enquanto j for menor que o comprimento da submatriz atual (matrizArray[i].length).
            somaElementosMatriz += matrizArray[i][j];
        }
    }

    return somaElementosMatriz;
}

console.log(`A soma dos elementos da matriz [${matrizArray}] é: ${somaMatrizArray()}`);