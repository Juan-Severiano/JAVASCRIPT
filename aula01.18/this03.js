// const pessoa = {
//   saud1: 'Bom dia',
//   saud2: 'Boa tarde',
//   saud3: 'Boa noite',
//   falar() {
//     console.log(this.saud1)
//   }
// }

// pessoa.falar();
// const falar = pessoa.falar;
// console.log(pessoa.falar)
// falar();// conflito de paradigmas: Estruturada e POO

// // crie uma nova funcapp que se chamada tem sua palavra-chave como valor fornecido
// const falaPessoa = pessoa.falar.bind(pessoa);
// falaPessoa();

function PessoaFun() {
  this.idade = 0;

  setInterval(function() {
    this.idade ++;
    console.log(this.idade);
  }.bind(PessoaFun), 2000)
}

new PessoaFun
