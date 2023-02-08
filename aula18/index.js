
//****  OBJETO

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

//****  FUNCAO PARA CRIAR OBJETOS

function criarPessoa (nome, sobrenome, idade) {
    return {
       /* 
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
        */
        //nao precisa repetir os dados

        nome,
        sobrenome,
        idade
    };
}
const pessoa2 = criarPessoa('Luiz', 'Miranda', 25);
const pessoa3 = criarPessoa('Erika', 'Machado', 27);
const pessoa4 = criarPessoa('Andreia', 'Sousa', 31);

console.log (pessoa2.nome, pessoa3.sobrenome);

//**** METODO

const pessoa5 = {
    nome: 'Erika',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`minha idade atual eh ${this.idade}`);
    },
    incrementaIdade() {
        this.idade ++;
    }
};
pessoa5.fala();
pessoa5.incrementaIdade();
pessoa5.fala();
pessoa5.incrementaIdade();
pessoa5.fala();
pessoa5.incrementaIdade();