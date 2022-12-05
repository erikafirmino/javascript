//variaveis
let num1;
let num2;
let resultado;
// Inserindo dados
alert('vamos iniciar');
num1 = prompt('Digite um número');
num2 = prompt('Digite outro número');
/* 
Tranformando em números
Poder usar o "Number" tbm
*/
num1 = parseFloat(num1); 
num2 = parseFloat(num2);
//Operação
resultado = num1 + num2;
//Mostrando resultado
alert(typeof num1); 
alert(typeof num2);
alert(`A soma é : ${resultado}`);
/* 
* Outra maneira de fazer* 
  
alert(`A soma é : ' ${num1 + num2}`); */
