let read = require("readline-sync")

let doacao = ["0", "1",  "2", "3", "4",]

console.log("0- para doar 10 reais")
console.log("1- para doar 25 reais")
console.log("2- para doar 50 reais")
console.log("3- para outros valores")
console.log("4- para cancelar")

let valor = read.question("Qual valor sera doado? ")

if (valor == doacao [0]) {
    console.log("você doou 10 reais muito obrigado")
}

else if (valor == doacao [1]) {
    console.log("você doou 25 reais muito obrigado")
}

else if (valor == doacao [2]) {
    console.log("você doou 50 reais muito obrigado")
}

else if (valor == doacao [3]) {
    let valor1 = read.question("Qual valor voce deseja doar?")
    console.log(`você doou ${valor1} reais muito obrigado`)

}
else{
    console.log("operação cancelada")
}