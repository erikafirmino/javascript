// Atribuição via desestruturação(objeto) 
//
const pessoa  = {
    firstName: 'Luiz',
    lastName: 'Miranda',
    age: 30,
    tel: 859755865,
    address :{
        road: 'Av. Brasil',
        number: 320
    }
}
// ... (rest) captura o conjunto restante.

const {lastName, firstName} = pessoa;
console.log(lastName, firstName)

//para pegar informacoes de um objeto que esta dentro de outro.
const {address:{road}} = pessoa;
console.log(road);

//atribuindo valores a uma variavel
const {address:{number:n}} = pessoa;
console.log(n);