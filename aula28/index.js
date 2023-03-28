//let data = new Date(); // funcao construtora comeca com a primeira letra maiuscula.
//console.log(data.toString());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() +1);
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    return `hoje eh ${dia}/${mes}/${ano} as ${hora}:${min}.`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);