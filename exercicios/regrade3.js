/**
 * regra de 3
 */

let read = require("readline-sync")

let valor = Number(read.question("qual e o valor do produto? "))
let porcentagem = Number(read.question("qual e a porcentagem de desconto? "))
let desconto = ((valor * porcentagem) / 100)
let valorf = (valor - desconto)

console.log(`total com desconto = ${valorf}`)