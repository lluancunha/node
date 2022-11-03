/**
 * fundamentos do Java Script
 */
// a linguagem JS trablha com sentenças 
 console.log("o palmeiras nao tem mundial")

// a linguagem JS trabalha com bloco {}
{

}

//variaveis no JS não são tipadas
// var let const (sao usadas para alocaçao de memoria)

// variavel do tipo string = nomes, letras etc...
// variavel do tipo number = numero ne 
// variavel do tipo boolean = verd ou falso 

var nome = "luan" // variaveis do tipo string nescessitam de aspas ""
var idade = 20
var vip = true
console.log("meu nome é " + nome)
console.log("tipo de variavel: " + typeof(nome))
console.log("tenho " + idade + " anos")
console.log("tipo de variavel: " + typeof(idade))
console.log("vip: " + vip)
console.log("tipo de variavel: " + typeof(vip))

//  --------------------------------------------------------------------------------------------------------------------------------------- //

// problemas no uso do var para declarar variaveis
var teste = "hello" // criar variavel
teste = "sem mundial" // alterar variavel        CERTO
var teste = "corinthians" // recriar variavel    ERRADO

// let resolve o problema, ele protege a variavel
let teste2 = "hello2" // criar uma variavel
teste2 = "bug2" // alterar a variavel            CERTO
 //let teste2 = "cu" // recriar a variavel       ERRADO MAS NAO FUNCIONA
console.log(teste2)

