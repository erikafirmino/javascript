function saudacao(nome){
console.log(`Bom dia, ${nome}!`)
}
saudacao('Erika');
/*  Funcoes nao retornam valores
eh preciso ter um "return"
*/

function saudar(nome){
    console.log(`Bom dia, ${nome}!`)
    return 123456;
}
const variavel = saudar('Joao');
console.log(variavel);


// a funcao retorna algo
function hello(nome){
return `Bom dia, ${nome}!`;
}
const variavel3 = hello('Maria');
console.log(variavel3);

const raiz = function (n) {
    return n ** 0.5;
};

/* ARROW FUNCTION
  
const raiz = n => n ** 0.5;
*/