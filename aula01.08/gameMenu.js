// crie um codifo com as principais funcionalidades do menu inicial de um game
// New Game | Load Game | Settings | Quit
const prompt = require('prompt-sync')();

const options = Number(prompt('Digite \n[1] New Game\n[2] Load Game\n[3] Settings\n[4] Quit\n'))

switch (options) {
    case 1:
        console.log('Carregando novo jogo ...')
        break
    case 2:
        console.log('Carregando jogo ...')
        break
    case 3:
        console.log('Abrindo configurações')
        break
    case 4:
        console.log('Saindo do jogo')
        break

}