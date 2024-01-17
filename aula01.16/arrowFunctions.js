// const soma = (a, b, c) => a + b + c;
// let dobro = a => a * 2;
// console.log(soma(1, 3, 6));
// console.log(dobro(7));

// dobro = a => 2 * a;
// console.log(dobro(6));

// let sayHello = function () {
//   return 'hello';
// }

// sayHello = () => 'hello';
// sayHello = _ => 'hello';

// Crie um code que leia uma array de 12 elements e os mostre

const style = require('../var.css')

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const readArray = (arr) => {
  for (let i = 0; i <  arr.length ; i++) {
    console.log(arr[i]);
  }
  return (
    <h1 style={style.h1}>StyleSheet</h1>
  )
};
readArray(arr);

