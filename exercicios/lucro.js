/**
 * custo de compra e venda de um produto de acordo com a margem de lucro desejada
 */

let read = require('readline-sync')

let compra = Number(read.question("qual o valor de compra do produto? "))
let margem = Number(read.question("qual a margem de lucro que voce deseja? (%) "))
let acrescimo = ((compra * margem) / 100)
let venda = (compra + acrescimo)

console.log(`voce deve vender o produto por ${venda}R$ `) 