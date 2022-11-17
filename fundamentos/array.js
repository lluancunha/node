/**
 * estudo de vetor
 */

let read = require('readline-sync')

// criando vetor 

// indices:      [0]            [1]           [2]        [3]
let times = ["corinthians", "palmeiras", "são paulo", "santos"]
let mundial = read.question("qual desses time nao tem mundial? ")

console.log(times[0])
console.log(typeof(times))
console.log(times.length)

// adicionando um item ao vetor
times[5] = "flamengo"
console.log(times)
console.log(times[5])

// adicionando varios
times.push("cruzeiro","sport","paysandu",)
console.log(times)
console.log(times.length)

console.log(times.indexOf("palmeiras")) // descobrir qual o indice do item

// adicionando valores de tipos diferentes ao vetor
times.push(1977,null,"bragantino",true)
console.log(times)

// removendo um item
delete times [1]
console.log(times)
console.log(times.length)

// removendo o ultimo item
times.pop()
console.log(times)


if ( mundial == times [1]) {
  console.log("sim ele mesmo")
} 
else {
    console.log("nao, é o merda do palmeiras")
}