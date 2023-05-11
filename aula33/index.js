//FOR clássico
//podemos começar um valores negativos
//podemos decrementar
//      var     cond   incr
// for(let i = 0; i <= 5; i++){
//     console.log(`linha ${i}`)

// }

// for(let i = 0; i <= 10; i++){
//     const par = i % 2 === 0 ? 'par': 'impar';
//     console.log(i, par);

// }
const h1 = document.querySelector('h1');

alert('vamos iniciar');

const frutas = ['Maçã', 'Pera', 'Uva', 'Goiaba', 'Mamão'];
let add = frutas.push(prompt('Digite uma fruta: '));

for(let i = 0; i < frutas.length; i++){
h1.innerHTML += `índice ${i}, ${frutas[i]} <br>`;
}