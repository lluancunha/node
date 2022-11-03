/**
 * como converter graus fahrenheit em graus celsius
 */

 let read = require('readline-sync')

 let grausf = Number(read.question("quantos graus fahrenheit?"))
 let grausc = ((grausf - 32) / 1.8)

 console.log(`${grausf} graus fahrenheit é igual a ${grausc.toFixed(2)} graus celsius`)