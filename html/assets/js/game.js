let height = 0
let width = 0
let numVida = 1
let time = 15
let quantidadeMosquito = 0

function stageHeight() {
  height = window.innerHeight
  width = window.innerWidth 

  console.log(height, width)
}

stageHeight();

let cronometro = setInterval(() => {
  time --
  if (time <= 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito);
    window.location.href = 'game_winner.html'
  }

  document.getElementById('cronometro').innerHTML = time
}, 1000)

function randomImg() {
  if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove();
    if (numVida > 3) {
      location.href = 'game_over.html'
    }
    document.getElementById('vida' + numVida).src = './assets/images/coracao_vazio.png'
    numVida ++
  }

  let positionX = Math.floor(Math.random() * width)  - 30
  let positionY = Math.floor(Math.random() * height) - 30

  positionX  = positionX < 0 ? 0 : positionX
  positionY  = positionY < 0 ? 0 : positionY

  let mosquito = document.createElement('img');
  mosquito.src = './assets/images/mosca.png'
  mosquito.className = randomHeight() + ' ' + randomSide()
  
  mosquito.style.left = positionX + 'px'
  mosquito.style.top = positionY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito';
  mosquito.onclick = function () {
    quantidadeMosquito ++
    document.getElementById('score').innerHTML = quantidadeMosquito
    this.remove()
  }

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
