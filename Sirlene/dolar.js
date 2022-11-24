let read = require("readline-sync")

let real = Number(read.question("Qual o valor em real? "))
let dolar = (real * 5.36 )

console.log(`${real}R$ em Dolar são ${dolar.toFixed(2)} Dolares`)