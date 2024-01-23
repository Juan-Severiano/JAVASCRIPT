function changeText(classe) {
  let elements = document.getElementsByClassName(classe);

  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = 'Texto alterado com sucesso'
  }
}

function changeText2(classe) {
  let tags = document.getElementsByTagName(classe);

  for (let i = 0; i < tags.length; i++) {
    tags[i].innerHTML = 'Texto alterado com sucesso'
  }
}

function changeName() {
  const a = document.getElementsByName('nome')[0]
  const b = document.getElementsByName('showName')[0]

  b.innerHTML = a.value
  a.value = 'JP viado'
}
