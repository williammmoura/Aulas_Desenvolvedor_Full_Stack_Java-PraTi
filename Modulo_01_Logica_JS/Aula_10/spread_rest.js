/*
spread = espalhar
rest = juntar
*/


//Conceito spread
let listaTimes = ['Internacional', 'Sport Club', 'Juventude'];
let listaTimes2 = ['Grêmio', 'Football Porto Alegrense'];

let listaTimesCompletos = ['Flamengo', 'São Paulo', ...listaTimes, ...listaTimes2];

console.log(listaTimesCompletos);

let nome = "William Moura";
console.log([...nome]);

//Conceito rest
const soma = (...param) => {
    let resultado = 0;

    console.log(param);

    param.forEach(elemento => resultado += elemento);

    return resultado;
}

console.log(soma(3, 8, 5, 7));