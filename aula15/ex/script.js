const numero = Number(prompt('Digite um numero: '));
const numeroTitulo = document.querySelector('span#numero-titulo');
const texto = document.querySelector('div#texto');
// <p></p>
numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>A raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} eh inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Eh NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;