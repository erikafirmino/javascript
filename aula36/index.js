const frutas = ['Pera', 'Maçã', 'Uva'];

//for(let i = 0; i < frutas.length; i++){
//    console.log(frutas[i]);
    
//}
//For in ler os indices ou chaves do objeto
//for(let indice in frutas){
//    console.log(frutas[indice]);
//}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};
//pega a chave e o valor em todos dos os indices.
for(let keys in pessoa){
    console.log(keys, pessoa[keys]);
}