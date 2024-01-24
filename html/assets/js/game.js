let height = 0
let width = 0

function stageHeight() {
  height = window.innerHeight
  width = window.innerWidth 

  console.log(height, width)
}

stageHeight();


function randomImg() {
  let positionX = Math.floor(Math.random() * width)
  let positionY = Math.floor(Math.random() * height)

  positionX  = positionX < 0 ? 0 : positionX
  positionY  = positionY < 0 ? 0 : positionY

  let mosquito = document.createElement('img');
  mosquito.src = './assets/images/mosca.png'
  mosquito.className = randomHeight() + ' ' + randomSide()
  
  mosquito.style.left = positionX + 'px'
  mosquito.style.top = positionY + 'px'
  mosquito.style.position = 'absolute'

  
  document.body.appendChild(mosquito);
}

function randomHeight() {
  let classe = Math.floor(Math.random() * 3)

  console.log(classe)

  switch (classe) {
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
}

function randomSide() {
  let classe = Math.floor(Math.random() * 2)

  switch(classe) {
    case 0: return 'aSide'
    case 1: return 'bSide'
  }
}
