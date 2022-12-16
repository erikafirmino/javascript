const alunos = ['Luiz', 'Maria', 'Joao'];
//
//alunos".pop()" {remove do final}
//alunos".shift()" {remove do comeco}
//posso salvar o valor removido eu outra variavel
const removido = alunos.pop()
console.log(`Esse aluno foi removido: ${removido}`)

//adiciona do comeco
alunos.unshift('Fabio')
alunos.unshift('Erika')

//adiciona automatico no final
alunos.push('Otavio') 
/*
alunos[alunos.length] = 'Luisa'
alunos[alunos.length] = 'Fabio'
alunos[alunos.length] = 'Luana'
*/

//Apaga o valor do inidice e deixa vazio
delete alunos[3]

console.log(alunos)
//Mostrar itens selecionados (valor pode ser negativo, mostra comecando do ultimo)
console.log(alunos.slice(0, 3))

//para saber se eh um array
console.log(alunos instanceof Array)




//Diz a quantidaded de indice do array
//console.log(alunos.length); 

alunos[0] = 'Eduardo'; // substitui
alunos[3] = 'Luiza';   // inclui
console.log(alunos)
//OBS:. podemos transformar Array para Number