
const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'},
    {tag: 'div', texto: 'Frase 2 '},
    {tag: 'secion', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'}
];
//captura a classe no html
const container = document.querySelector('.container');

//cria o elemento 'div'
const div = document.createElement('div');

//for para a criação das tags 
for(let i = 0; i < elementos.length; i++){

    //para captura os elementos do objeto.
    let {tag, texto } = elementos[i];
    //para criar a tag
    let tagCriada = document.createElement(tag);
    //para inserir o texto
    tagCriada.innerHTML = texto;
    //para colocar as tags criadas dentro da div criada anteriormente.
    div.appendChild(tagCriada);
}
//para colocar a div dentro do container.
container.appendChild(div);