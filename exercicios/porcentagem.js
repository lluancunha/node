/**
 * calculo de porcentagem
 */

let read = require('readline-sync')

let valor = read.question("qual e o valor do produto?")
let porcentagem = read.question("qual e a porcentagem de desconto?")
let valorf = ((valor * porcentagem) / 100)

console.log(`valor do desconto = ${valorf}`)