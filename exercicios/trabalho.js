/**
 * calculo de hora trabalhada
 */

let read = require('readline-sync')

let remuneracao = Number(read.question("quanto voce quer receber por mes? "))
let reserva = ((remuneracao * 30) / 100) // reserva de 30% da remuneraçao mensal
let reservainv = ((remuneracao * 20) / 100) // reserva de 20% de investimento
let custoop = Number(read.question("qual o custo operacional mensal? "))
let cargah = Number(read.question("qual a carga horaria mensal? "))
let horatec = ((remuneracao + reserva + reservainv + custoop) / cargah) 

console.log(`esse e o valor da hora tecnica: ${horatec}`)