/**
 * comparadores
 */
// comparadores se referem as variaveis

console.log("comparadores")
console.log(">   | maior que")
console.log(">=  | maior ou igual que")
console.log("<   | menor que")
console.log("<=  | menor ou igual que")
console.log("==  | comparador de igualdade BUG")
console.log("=== | comparador de igualdade SEM BUG")
console.log("!=  | diferente de BUG")
console.log("!== | diferente de SEM BUG")

let x = 2 
let y = "2"
console.log(typeof(y))
console.log(typeof(x))

// demonstraçao do bug com ==
if (x == y) {
console.log("x é igual a y")
} else {
    console.log("x é diferente de y")
}

// demonstraçao do bug com !=
if (x != y) {
    console.log("x é diferente de y")
    } else {
        console.log("x é igual a y")
    }
