const repetentes = ['Felipe', 'Zidani', 'Logan']

repetentes.forEach((nome) => {
  console.log(`Eu ${nome} sou repetente`);
})

repetentes.forEach(nome => console.log(nome))
const showRepetentes = repetentes => console.log(`Exibir ${repetentes} como repetente`)
repetentes.forEach(nome => showRepetentes(nome))