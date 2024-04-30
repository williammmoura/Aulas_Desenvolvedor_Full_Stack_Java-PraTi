let listaProdutos = Array('Computador', 'Caneta', 'Chuteira');

let auxiliar = listaProdutos.indexOf('Caneta');

//Condição para ve o indice de umdeterminado elemento
if(auxiliar === -1){// '-1' para caso não encontrar o elemento
    console.log("Elemento não existe no Array");
}else{
    console.log("Elemento existe e está na posição " + auxiliar);
}