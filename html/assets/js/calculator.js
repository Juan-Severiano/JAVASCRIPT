function calculate(type, value) {
  console.log(`O tipo é ${type} e o valor é: ${value}`)

  if (type === 'num') {
    document.getElementById('result').value += value;
  } else if (type === 'action') {

  }
}