// this faz referencia ao pai de um elemento

function aluno (nomeAluno, notaAluno) {
  this.nomeAluno = nomeAluno;
  this.notaAluno = notaAluno;

  this.dadosAnonimos = () => {
    setTimeout(() => {
      console.log(this.nomeAluno);
      console.log(this.notaAluno);
    }, 3000)
  }
}

const aluno1 = new aluno('Juan', 2.3);
aluno1.dadosAnonimos()