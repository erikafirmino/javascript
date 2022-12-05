// Não podemos criar constante com palavras reservadas
// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos redeclarar contantes 
// NÃO UTILIZE VAR, UTILIZE LET.

// String = Text | Number = Número
 //JavaSript é uma linguagem de tipagem dinamica
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;
let resultadoTriplo = resultado * 3;
resultadoTriplo = resultadoTriplo + 5;
console.log(resultadoTriplo);

console.log(typeof primeiroNumero); //para verificar o tipo 

console.log(primeiroNumero + segundoNumero); //caso um dos valores seja uma string, vai acontecer uma concatenação
