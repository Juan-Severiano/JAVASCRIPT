// criar uma funcao de forma literal
function fun1 (a, b) { return a * b }

// armazeeenar funcao em variavel
const fun2 = function (a, b) { return a - b }

// armazenar uma funcao em um array
const myArray = [function (a, b) { return a + b }, fun1, fun2];

// const person = {
//   name: 'Joao',
//   lastName: 'Pedro',
//   fullName: function () {
//     return this.name + ' ' + this.lastName
//   }
// }

const obj = {};

obj.falar = () => 'Opa, to aqui viado'

console.log(obj.falar())
