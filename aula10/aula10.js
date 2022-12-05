/*
*    Operadores aritméticos00*

*   + _ adição e concatenação
*   - _ subtração
*   * _ multiplicação
*   / _ divisão
*  ** _ potenciação
*   % _ resto da divisão

*   Operadores de incremento/decremento  *

*  ++ _ incremento
*  -- _ decremento

*  Operadores de Atribuição

*  +=
*  -=
*  *=
*  /=
*/
/* 

*  Ordem de precedência

*  1- ()
*  2- **
*  3- *  /  %
*  4- +  -
*/

let contador = 0;
contador += 2;
contador += 2;
contador += 2;
console.log(contador);
//pode ser feito com qualquer operação citada a cima


// NaN - Not a number 
const num1 = 10;
const num2 = Number('Erika');

console.log(num1 + num2);
console.log(typeof num2);

// parseInt (inteiro), parseFloat(decimais)
const num3 = 10;
const num4 = parseFloat('5.2');

console.log(num3 + num4);
console.log(typeof num4);


//Number
const num5 = 10;
const num6 = Number('6');

console.log(num5 + num6);
console.log(typeof num6);