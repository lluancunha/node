let read = require("readline-sync")

let nome = read.question("Qual seu nome?")
let idade = Number(read.question("Qual sua idade?"))
let meses = (idade *12)
let dias = (idade *365)
let horas = (idade *8760)
let minutos = (idade *525600)

console.log(`sua idade pode ser convertida em `)
console.log(`${meses.toFixed(2)} meses ou `)
console.log(`${dias.toFixed(2)} dias ou `)
console.log(`${horas.toFixed(2)} horas ou `)
console.log(`${minutos.toFixed(2)} minutos`)