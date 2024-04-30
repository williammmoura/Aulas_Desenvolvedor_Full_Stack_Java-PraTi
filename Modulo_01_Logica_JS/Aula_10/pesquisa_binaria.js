/*PESQUISA BINÁRIA

Desenvolva um algoritmo que seja capaz de receber uma lista, e um valor correto. E execute uma pesquisa binária para encontrar o valor certo.

*/

const binarySearch = (arr, target) => {
    //low e higt, que representam os índices extremos da lista. low começa em 0, e higt começa no último índice da lista.
    let low = 0;
    let higt = arr.length - 1;

    while (low <= higt) {
        let mid = Math.floor((low + higt) / 2);// Isso nos dá o índice médio da seção atual da lista que estamos analisando.

        if (arr[mid] === target) {//Se o valor na posição mid for igual ao alvo, encontramos o alvo e retornamos o índice mid
            return mid; // Alvo encontrado
        } else if (arr[mid] < target) {
            low = mid + 1; // Se o valor na posição mid for menor que o alvo, atualizamos low para mid + 1, para buscar na metade direita da lista.
        } else {
            higt = mid - 1; // Se o valor na posição mid for maior que o alvo, atualizamos higt para mid - 1, para buscar na metade esquerda da lista.
        }
    }

    return null; // Target not found
}

// Example usage:
// Definimos uma lista ordenada e um alvo, e chamamos a função binarySearch para encontrar o índice do alvo na lista.
const list = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 13;
const index = binarySearch(list, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found.`);
}
