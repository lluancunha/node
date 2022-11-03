/**
 * calculo de imc
 */

 let read = require('readline-sync')

 let peso = Number(read.question("qual e o seu peso?"))
 let altura = Number(read.question("qual e a sua altura"))

 let imc = peso / (altura * altura)
 console.log(`IMC: ${imc.toFixed(2)}`)

 if (imc < 18.5) {
    console.log("Baixo peso")
 }
  if (imc > 18.5 && imc < 25) {
    console.log("Peso ideal")
 }
 if (imc > 24.9 && imc < 30) {
    console.log("Excesso de peso")
 }
 if (imc > 29.9 && imc < 35) {
    console.log("Obesidade grau 1")
 }
 if (imc > 34.9 && imc < 40) {
    console.log("Obesidade grau 2")
}
if (imc > 39.9) {
    console.log("Obesidade grau 3")
}
