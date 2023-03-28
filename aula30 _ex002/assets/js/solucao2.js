
const h1 = document.querySelector('#texto');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
//toLocaleDateString = para data
//toLocaleTimeString = para hora
//toLocaleString = data e hora