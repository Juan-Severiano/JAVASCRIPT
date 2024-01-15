// Crie um codigo que implemente um cadastro de estudante. Utilizando objetos.
const prompt = require('prompt-sync')()
const estudantes = []

while (true) {
    const estudante = {}
    estudante.nome = prompt('Informe o nome do estudante: ')
    estudante.sobrenome = prompt('Informe o sobrenome do estudante: ')
    estudante.idade = Number(prompt('Informe o idade do estudante: '))
    estudante.turma = prompt('Informe o turma do estudante: ')
    estudante.serie = Number(prompt('Informe o serie do estudante: '))
    estudante.turno = prompt('Informe o turno do estudante: ')
    saveEstudante(estudante)
    const saida = prompt('Digite S para Sair: ')

    if (saida.toLowerCase() === 's') break
}


function saveEstudante(obj) {
    estudantes.push(obj)
}

console.table(estudantes)