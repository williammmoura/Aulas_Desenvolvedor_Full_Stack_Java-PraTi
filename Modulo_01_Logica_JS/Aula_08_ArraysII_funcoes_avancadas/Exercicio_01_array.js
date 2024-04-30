//somar todos os elementos de um array

let elementosNumericosArray = [1, 2, 3, 4];

const somaElementosArray = () => {
    let soma = 0 //variável soma e inicializada com o valor 0, que será usada para armazenar a soma dos elementos do array.
    for(let i = 0; i < elementosNumericosArray.length; i++){//A cada iteração, o valor do elemento atual é somado à variável soma.
        soma += elementosNumericosArray[i];
    }

    return soma;
}

console.log(`A soma dos elementos do array [${elementosNumericosArray}] é: `, somaElementosArray());