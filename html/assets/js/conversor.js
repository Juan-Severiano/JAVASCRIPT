// obter input 
const inputElement = document.querySelector('#input')
const fromElement = document.querySelector('#from');
const toElement = document.querySelector('#to');
const outputElement = document.querySelector('#output');
const converterElement = document.querySelector('#converter-btn');
const messageElement = document.querySelector('#message')

function converter() {
  // receber os valores das unidades de entrada
  const fromValue = fromElement.value
  const toValue = toElement.value

  if (fromValue === toValue) {
    outputElement.value = inputElement.value
    messageElement.textContent = ""
    return
  }

  // conversao p metros
  let metros
  switch (fromValue) {
    case 'm':
      metros = inputElement.value
      break;
    case 'km':
      metros = inputElement.value * 1000
      break;
    case 'cm':
      metros = inputElement.value / 100
      break;
    case 'mm':
      metros = inputElement.value / 1000
      break;
  }

  // conversao p unidades de saida 
  let result
  switch (toValue) {
    case 'm':
      result = metros
      break;
    case 'km':
      result = metros / 1000
      break;
    case 'cm':
      result = metros * 100
      break;
    case 'mm':
      result = metros * 1000
      break
  }

  outputElement.value = result.toFixed(2)

  // exibir as messages
  const fromLabel = fromElement.options[fromElement.selectedIndex].text
  const toLabel = toElement.options[toElement.selectedIndex].text
  const message = `${inputElement.value} ${fromLabel} equivale a ${result.toFixed(2)} ${toLabel}`

  messageElement.innerText = message
}

converterElement.addEventListener('click', converter)
