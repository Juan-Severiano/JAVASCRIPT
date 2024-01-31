const clientNameElement = document.querySelector('#client-name');
const clientAdressElement = document.querySelector('#client-address');
const clientNumberElement = document.querySelector('#client-phone');
const consultNameElement = document.querySelector('#consult-name');
const consultTimeElement = document.querySelector('#consult-time');
const consultDoctorElement = document.querySelector('#consult-doctor');
const createConsultButton = document.querySelector('#create-consult') || document;
const ul = document.querySelector('#ul')
let consults = [];

const createConsult = (e) => {
  e.preventDefault();
  consults = [...JSON.parse(localStorage.getItem('consults'))]
  let newConsult = new Consulta(clientNameElement.value, clientNumberElement.value, clientAdressElement.value, consultNameElement.value, consultTimeElement.value, consultDoctorElement.value)
  if (!newConsult.isValid()) return
  consults = [...consults, newConsult];
  console.log(consults);
  console.log(newConsult);
  localStorage.setItem('consults', JSON.stringify(consults));
  console.log(localStorage.consults)
  location.assign('/')
}

function clearFields() {
  clientNameElement.value = ''
  clientNumberElement.value = ''
  clientAdressElement.value = ''
  consultNameElement.value = ''
  consultTimeElement.value = ''
  consultDoctorElement.value = ''
}

createConsultButton.addEventListener('submit', createConsult);

async function loadData() {
  console.log('hi')
}

function createConsultElement(item, list, index) {
  const li = document.createElement('li');
  const biDelete = document.createElement('i');
  biDelete.classList = 'ms-auto bi bi-trash-fill text-danger btn'
  biDelete.addEventListener('click', () => {
    consults.splice(index, 1)
    ul.innerHTML = '';
    for (let i = 0; i < consults.length; i++) {
      ul.appendChild(createConsultElement(consults[i], consults, i));
      localStorage.setItem('consults', JSON.stringify(consults));
    }
  })
  const description = document.createElement('p')
  description.className = 'text-muted'
  description.textContent = `Doutor(a) ${item.doctor}`
  const time = document.createElement('p')
  time.className = 'text-muted'
  time.textContent = `Dia ${new Date(item.time).toLocaleDateString()}`
  const h5 = document.createElement('h5')
  h5.innerText = `Consulta de ${item.name} com o paciente ${item.client.name}`
  h5.classList = 'card-title'
  const dropdown = document.createElement('span');
  dropdown.innerHTML = `Endereço do paciente: ${item.client.adress}<br>Número para contato ${item.client.number}`
  dropdown.className = 'text-muted'
  li.appendChild(h5);
  li.appendChild(description);
  li.appendChild(time);
  li.appendChild(dropdown);
  li.appendChild(biDelete);
  li.classList = 'task card p-2 my-2 px-4';
  return li
}

document.querySelector('body').addEventListener('load', showConsults)

function showConsults() {
  consults = JSON.parse(localStorage.getItem('consults'));
  console.log(consults);
  for (let i = 0; i < consults.length; i++) {
    if (consults.length === 0) {
      ul.innerHTML = 'Sem nenhuma consulta'
    }
    ul.appendChild(createConsultElement(consults[i], consults, i))
  }
}
