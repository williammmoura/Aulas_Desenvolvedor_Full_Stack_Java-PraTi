// Encontre o maior número em uma matriz

let matrizDeArrays = [[2, 7, 3], [4, 0, 1], [10, 14, 55]];

const maiorNumeroMatriz = () => {
    let maiorNumero = matrizDeArrays[0][0]; // Inicializa com o primeiro elemento da matriz

    for(let i = 1; i < matrizDeArrays.length; i++){
        for(let j = 1; j < matrizDeArrays[i].length; j++){
            if(matrizDeArrays[i][j] > maiorNumero){
                maiorNumero = matrizDeArrays[i][j];
            }
        }
    }

    return maiorNumero;
}

console.log(`O maior número da matriz [${matrizDeArrays}] é: ${maiorNumeroMatriz()}`);