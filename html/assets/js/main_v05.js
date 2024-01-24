const inputUser = document.getElementById('input_user')
let listOfObjects = ['Cadeira', 'Impressora', 'Garfo']
const listOfObjectsHTML = document.getElementById('list')

function add() {
  if (inputUser.value === '') return
  listOfObjects.push(inputUser.value);
  inputUser.value = ''
  console.log(listOfObjects)
  listOfObjects.forEach((item) => {
    listOfObjectsHTML.innerHTML += `<li>${item}</li>`
  })
}

function order() {
  listOfObjects.sort()
  console.log(listOfObjects)
}