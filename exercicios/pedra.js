/**
 * jogo de pedra papel ou tesoura
 */

let read = require('readline-sync')

let jogo = ["pedra", "papel", "tesoura"]

let jogador = read.question("escolha pedra papel ou tesoura ")
if (jogador !== jogo [0] || jogador !== jogo [1] || jogador !== jogo [2]){
    console.log("opcao invalida")
}

let computador = Math.floor(Math.random() * 3)
console.log(`escolha do jogador ${jogador}`)
console.log(`escolha do computador ${jogo[computador]}`)

if (jogador == jogo [0] && computador == 0 || jogador == jogo [1] && computador == 1 ||jogador == jogo [2] && computador == 2){
    console.log("empate")
}

else if  (jogador == jogo [0] && computador == 1 || jogador == jogo [2] && computador == 0 || jogador == jogo [1] && computador == 2) {
    console.log("Você perdeu")
}
   
else {
    console.log("Parabens voce ganhou")
}