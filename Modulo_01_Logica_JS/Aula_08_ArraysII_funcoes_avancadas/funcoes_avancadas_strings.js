//Funções avançadas: Strings

/*String é considerado um valor primitivo, porem, ao ser interpretado o JS os convertem em objetos, possuindo propriedades e métodos.*/

console.log("William Monte de Moura".length); //Dá o tamanho da string contando os espaços

let nome = "William";
console.log(nome.indexOf("m")); //Mostra o indice que está a letra "m" (essa função é case sensitive)

let nome1 = "Moura";
console.log(nome1.replace("Moura", "Monte")); //Coloca "Monte" no lugar de "Moura"

console.log(nome1.toLocaleLowerCase()); // Para colocar todas as letras em minúsculas

console.log(nome1.toLocaleUpperCase()); // Para colocar todas as letras em maiúsculas

