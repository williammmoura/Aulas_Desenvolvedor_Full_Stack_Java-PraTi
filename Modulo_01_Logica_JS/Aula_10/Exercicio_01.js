let filmes = [
    { titulo: "Filme 1", genero: "Ação" },
    { titulo: "Filme 2", genero: "Comédia" },
    { titulo: "Filme 3", genero: "Ação" },
    { titulo: "Filme 4", genero: "Drama" },
    { titulo: "Filme 5", genero: "Comédia" }
];


/*com forEach para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por gênero. Para cada filme no array, verifique se o genero já existe no objeto contagem. Se existir, incremente a contagem, se não, adicione o gênero com congem. Após loop, imprima cada gênero e o número de filmes correspondente.
*/

let contagemGeneros = {};

filmes.forEach(filme => {
    if(contagemGeneros[filme.genero]){
        contagemGeneros[filme.genero]++
    }else{
        contagemGeneros[filme.genero] = 1
    }
});

for(let genero in contagemGeneros){
    console.log(`${contagemGeneros[genero]} filme(s) do gênero ${genero}.`);
};