const nome = ['Erika', 'Maria', 'Luiza'];

for(let i=0; i<nome.length; i++){
    console.log(nome[i]);
}
console.log('########');

//funciona para objeto
for(let i in nome){
    console.log(nome[i]);
}
console.log('########');

for(let valor of nome){
    console.log(valor);
}
console.log('########');

nome.forEach(function(valor, index, array){
    console.log(valor, index, array);
});

//for classico - Gralmente com iteráveis (array ou strings)
//for in - Retorna o indice ou chave (string, array ou objetos)
//for of- Retorna o valor em si (array ou strings)