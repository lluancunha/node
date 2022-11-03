/**
 * o eleitor tem voto obrigatorio facultativo ou nao pode votar
 */

let read = require('readline-sync')
let color = require('colors')

let idade = read.question("qual a sua idade? ")

if (idade < 16)  {
 console.log("voce nao pode votar".red)
}
else if (idade > 17 && idade < 71) {
 console.log("seu voto e obrigatorio".green)
}
else {
    console.log("voto facultativo".yellow)
}



