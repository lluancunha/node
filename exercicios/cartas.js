/**
 * uso de vetor
 */

let nipes = ["ouros","copas","espadas","paus"]
let faces = ["A",1,2,3,4,5,6,7,8,9,10,"J","Q","K"]

// recuperando a carta AZ de ouros
console.log(`${faces[0]} de ${nipes[0]}`)

// recuperando Q de copas
console.log(`${faces[12]} de ${nipes[1]}`)

//sorteio de uma carta
// Math.random  gerador de numeros aleatorios
// Math.florr transforma em numeros inteiros
let nipe = Math.floor(Math.random() * 4)
let face = Math.floor(Math.random() * faces.length)
console.log(`carta sorteada ${faces[face]} de ${nipes[nipe]}`)

