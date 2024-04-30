//Array ou vetor

let listaCompras = Array();

listaCompras[0] = "Shampoo";
listaCompras[1] = "Condicionador";
listaCompras['x'] = 100;

console.log(listaCompras);

//Outra forma de declarar um Array
let listaFrutas = ['Banana', 'Morango']

console.log(listaFrutas[1]);

//Array multidimencionais

let listaCoisas = Array();

listaCoisas['Frutas'] = Array();

listaCoisas['Frutas'][0] = "Morango";
listaCoisas['Frutas'][1] = "Uva";
listaCoisas['Frutas'][2] = "Laranja";
listaCoisas['Frutas'][3] = "Bergamota";

listaCoisas['Viagem'] = Array();

listaCoisas['Viagem'][0] = "Passagens";
listaCoisas['Viagem'][1] = "Malas";

console.log(listaCoisas);

//Inserção de elementos no final do array
listaCoisas['Frutas'].push('Banana');
console.log(listaCoisas);

//Inserção de elementos no início do array
listaCoisas['Frutas'].unshift('Limão');
console.log(listaCoisas);

//Excluir um elemento do final do array
listaCoisas['Frutas'].pop();
console.log(listaCoisas);

//Excluir um elemento no inicio do array
listaCoisas['Frutas'].shift();
console.log(listaCoisas);

//Ordenação do array
//Ordem alfabetica
let listaProdutos = ['Lousa', 'Caneta', 'Chuteira', 'Garrafa da água'];

console.log(listaProdutos.sort());

//Ordem numérica
let listaNumeros = ['2', '4', '1', '3'];

console.log(listaNumeros.sort());