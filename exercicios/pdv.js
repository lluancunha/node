/**
 * simulador de ponto de venda
 */

let read = require('readline-sync')

let valorcompra = read.question("qual o valor da compra? ")
let porcentagem = read.question("qual a porcentagem de desconto? ")
let desconto = ((valorcompra * porcentagem) / 100)
let valor = (valorcompra - desconto)
let dinheiro = read.question("quanto o cliente pagou em dinheiro? ")
let troco = (dinheiro - valor)

console.log(`troco = ${troco}`)