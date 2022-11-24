let read = require("readline-sync")

let produto = Number(read.question("Qual o valor do produto? "))
let imposto = (produto * 0.3)
let final = (produto + imposto)

console.log(`O valor do produto é: ${produto.toFixed(2)}`)
console.log(`O valor do imposto é: ${imposto.toFixed(2)}`)
console.log(`O valor do produto com imposto é: ${final.toFixed(2)}`)