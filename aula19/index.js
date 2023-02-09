/*
* Primitivos (imutaveis) 
String, number, boolean, undefined, null (bigint, symbol) - valores copiados

* Referencia (mutaveis) 
Array, object, function - valores passados por referencia

*/

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);