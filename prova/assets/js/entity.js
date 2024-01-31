class Consulta {
  constructor (clientName, clientNumber, clientAdress, consultName, consultTime, consultDoctor) {
    this.name = consultName
    this.doctor = consultDoctor
    this.time = consultTime
    this.client = {
      name: clientName,
      adress: clientAdress,
      number: clientNumber
    }
  }

  isValid() {
    for(let i in this) {
			if(this[i] == undefined || this[i] == '' || this[i] == null) {
				return false
			}
		}
		return true
  }
}
