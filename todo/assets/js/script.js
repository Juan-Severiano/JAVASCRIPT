class Task {
  constructor(title, description, date, time, checked = true) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.time = time;
    this.isChecked = checked
  }

  dataValidation() {
    for (let i in this) {
      if (this[i] == undefined || this[i] == '' || this[i] == null) {
        return false
      }
    }
    return true
  }

  toggleChecked() {
    if (!this.isChecked) {
      this.isChecked = true
    }

    console.log('checado aqui')
  }
}

function saveTask(task) {
  console.log('asd')
  let tasks = new Array()

  if (localStorage.hasOwnProperty("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert('save');
}

function saveTaskByID(task, id) {
  let tasks = new Array()

  if (localStorage.hasOwnProperty("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks))

  alert('save')
}

const createTask = () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const task = new Task(title, description, date, time)

  if (task.dataValidation()) {
    saveTask(task)
  }

  console.log('criou', task)
}

function createCardElement(cardData, id, list) {
  console.log(id)
  const card = document.createElement('div');
  card.classList = 'card col-12 col-md-4 col-lg-3'
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const h3 = document.createElement('h3');
  h3.className = 'card-title'
  h3.innerText = cardData.title
  const p = document.createElement('p');
  p.classList = 'card-text text-muted'
  p.innerText = cardData.description
  const date = document.createElement('span');
  date.innerHTML = new Date(cardData.date).toLocaleDateString()
  const time = document.createElement('span');
  time.innerHTML = ` às ${cardData.time}`
  const deleteItem = document.createElement('p');
  deleteItem.innerText = 'Deletar';
  deleteItem.addEventListener('click', () => {
    for (let i = 0; i < list.length; i++) {
      list.splice(id, 3)
      saveTask(list[id]);
      console.log('asd2')
    }
    console.log(list)
  })
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox'
  checkBox.classList = 'd-block ms-auto'
  checkBox.checked = cardData.isChecked
  checkBox.addEventListener('change', () => {
    console.log(checkBox.checked)
    if (checkBox.checked === true) {
      cardBody.classList.add('text-decoration-line-through')
      cardData.toggleChecked()
      list[id].isChecked = true
    }
    else {
      cardBody.classList.remove('text-decoration-line-through')
      list[id].isChecked = false
    }
  })
  cardBody.appendChild(h3)
  cardBody.appendChild(p)
  cardBody.appendChild(date)
  cardBody.appendChild(time)
  cardBody.appendChild(checkBox)
  cardBody.appendChild(deleteItem)
  card.appendChild(cardBody)
  return card
}


function loadTasks() {
  if (localStorage.hasOwnProperty("tasks")) {
    JSON.parse(localStorage.getItem("tasks")).forEach((task, index) => {
      const ul = document.getElementById('listOfTasks');
      ul.appendChild(createCardElement(new Task(task.title, task.description, task.date, task.time), index, JSON.parse(localStorage.getItem("tasks"))))
    })
  }
}
