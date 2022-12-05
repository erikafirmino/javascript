// Strings são indexadas   ex:. 0  1 2 3
let umaString = 'Um "texto"'; 
let duasString = 'O rato roeu a roupa do rei de roma';

// ('Um "texto"')
// ("Um\"texto\"")
console.log(umaString);
//Um "texto"

// Busca uma letra especifica na posição indicada
console.log(umaString[5]);
//e

// Busca uma letra especifica na posição indicada
console.log(umaString.charAt(5));
//e

// Contena um texto
console.log(umaString.concat(' ', 'concatenado.'));
//Um "texto" concatenado.

//acha o index da letra
console.log(umaString.indexOf('o', 3));
//8

//acha o index da letra começando de trás para frente
console.log(umaString.lastIndexOf('m', 3));
//1

//troca a palavar indicada
//aceita expresões regulares 
console.log(umaString.replace('Um', 'Outro'));
//Outro "texto"

//Troca o valor das letras
//Sem o "g" troca apenas a primeira
//Com o "g" troca todas
console.log(duasString.replace(/r/g, '#'));
//O #ato #oeu a #oupa do #ei de #oma

//Diz o tamanho do indice
console.log(duasString.length);
//34

//Busca o valores nos indices indicados
console.log(duasString.slice(2, 6));
//rato

//separa as strings cpm base no valor indicado
console.log(duasString.split(' '));
/* 
['O','rato','roeu', 'a','roupa' ,'do', 'rei', 'de', 'roma']
*/

//Letras maiusculas
console.log(duasString.toUpperCase());
/*
O RATO ROEU A ROUPA DO REI DE ROMA
*/

//Letras minusculas
console.log(duasString.toLowerCase());
/*
o rato roeu a roupa do rei de roma
*/

/*
*sites*
w3school
mozila
*/