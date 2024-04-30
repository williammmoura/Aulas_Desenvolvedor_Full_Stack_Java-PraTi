//Reverter um Array

const arrayReverso = () =>{
    let reversoArray = [];
    for(let i = arrayDeNumeros.length - 1; i >= 0; i--){
        reversoArray.push(arrayDeNumeros[i]);
    }
    return reversoArray;
}

let arrayDeNumeros = [1, 2, 3, 4, 5];
let reverso = arrayReverso();
console.log(`O reverso do array ${arrayDeNumeros} é: ${reverso}`);