const lista1 = ['a', 'b', 'c', 'd', 'e']
let lista2 = [1, 2, 3, 4, 5]

console.log(lista1.length)
console.log(lista2[1])
console.log(lista2.length)

// for (let i = 0; i < lista1.length ; i++) {
//     console.log(lista1[i])
// }

let lista3 = lista1

lista3.push('f')
lista3.pop()

console.log(lista1)
console.log(lista3)
