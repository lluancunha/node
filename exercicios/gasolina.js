/**
 * projeto para ver qual é mais viavel etanol ou gasolina
 */

let read = require('readline-sync')
let color = require('colors')

let etanol = read.question("qual o valor do etanol? ")
let gasolina = read.question("qual o valor da gasolina? ")

if ((gasolina * 30) / 100 > etanol) {
    console.log ("etanol é o mais viavel".blue)
} else {
    console.log ("gasolina é o mais viavel".red)
}
