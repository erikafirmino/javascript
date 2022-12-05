/*
nome
sobrenome
data de nascimento
altura
peso
imc
*/

const nome = ' Erika';
const sobrenome = 'Machado';
const idade = 27;
const peso = 70;
const altura = 1.65;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade,'anos.');
console.log(`Pesa ${peso} kg.`);                              // fechamento das variaveis com " ${} ". (mais usual)
console.log('Sua altura é :'+ altura,);                       // concatenação
console.log(`Seu Indice de Massa corparal é : ${imc}.`);
//poderiamos usa + para unir a string.