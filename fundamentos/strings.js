/**
 * strings
 */

const professor = "tite" 
//indice           0123...
console.log (typeof (professor))
console.log (professor)

// obtendo o valor de um caracter da string
console.log (professor.charAt(3))   //charAt 3 = E

// para obter o valor do indice de uma string
console.log (professor.indexOf("e"))

// obter uma sequencia a partir do indice
console.log (professor.substring(1))  //mostra todas as letras a partir do numero q vc digitou

// alterar o conteudo
console.log (professor.replace("tite","genio")) // muito usado para trocar virgula por ponto

// ----------------------------------------------------------------------------------------------------------------------------------------- //

// concatenação
const x = 2
const y = "3"
console.log("valor de x: "  + x)
console.log("3" + x) // concatena
console.log("3" - x) //BUG  subtrai (o mesmo para * e /)
// evitar o uso de + na concatenação 

//para concatenar SEM BUG use crase ``
console.log(`professor: ${professor}`)
