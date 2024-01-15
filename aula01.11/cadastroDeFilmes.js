// Crie um codigo que faça  o cadastro de filmes. Você deve ter as seguintes chaves: { nome, duracao, genero }
const prompt = require('prompt-sync')()
const filmes = []

while (true) {
    const filme = {}
    filme.nome = prompt('Informe o nome do filme: ')
    filme.duracao = prompt('Informe a duração do filme em minutos: ')
    filme.generos = {}
    filme.generos.id1 = prompt('Informe o genero do filme: ')
    filme.generos.id2 = prompt('Informe outro genero do filme: ')
    saveFilm(filme)
    const saida = prompt('Digite S para Sair: ')

    if (saida.toLowerCase() === 's') break
}


function saveFilm(obj) {
    filmes.push(obj)
}

console.table(filmes)
console.table(filmes.generos)