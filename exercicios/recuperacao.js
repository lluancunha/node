/**
 * calculo da media com recuperação
 */

 let read = require('readline-sync')
 let color = require(`colors`)
 
 let nome = read.question("qual seu nome?")
 console.log(`aluno: ${nome}`)

 let nota1 = Number(read.question("digite a nota 1: ").replace(",","."))
 let nota2 = Number(read.question("digite a nota 2: ").replace(",","."))

 let media = (nota1 + nota2) / 2
 console.log(`media: ${media.toFixed(1)}`)

 if (media >= 5) {
     console.log("aprovado".green)
 } 
 else if (media <= 2) {
    console.log("reprovado".red)
 }
 else {
    console.log("Voce esta de recuperaçao".yellow)
 }
