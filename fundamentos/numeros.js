/**
 *numeros
 */

 const peso = 80.0
 const altura = 1.85

 console.log(typeof(peso))
 console.log(typeof(altura))

 // dica para saber se um numero é inteiro ou nao
console.log(Number.isInteger(peso))  // true ou false
console.log(Number.isInteger(altura))

const imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`) // .toFixed arredonda para 2 casas depois da virgula

// ATENÇÃO
console.log (10/0)
console.log ("10"/"m")
console.log (0.1 + 0.2)