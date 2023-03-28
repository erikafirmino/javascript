let texto = document.querySelector('.container h1');
const data = new Date();
let diaSemana = data.getDay();
let nomeMes = data.getMonth();

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda - feira';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça - feira'
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta - feira'
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta - feira'
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta - feira'
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sabado'
        return diaSemanaTexto;
    default:
        diaSemanaTexto = ''
    }
}
function getNomeMes(numeroMes){
    let nomeMesTexto;
    switch(numeroMes){
    case 0:
        nomeMesTexto = 'Janeiro'
        return nomeMesTexto;
        case 0:
            nomeMesTexto = 'Janeiro'
            return nomeMesTexto;
        case 1:
            nomeMesTexto = 'Fevereiro'
            return nomeMesTexto;
        case 2:
            nomeMesTexto = 'Março'
            return nomeMesTexto;
        case 3:
            nomeMesTexto = 'Abril'
            return nomeMesTexto;
        case 4:
            nomeMesTexto = 'Maio'
            return nomeMesTexto;
        case 5:
            nomeMesTexto = 'Junho'
            return nomeMesTexto;
        case 6:
            nomeMesTexto = 'Julho'
            return nomeMesTexto;
        case 7:
            nomeMesTexto = 'Agosto'
            return nomeMesTexto;
        case 8:
            nomeMesTexto = 'Setembro'
            return nomeMesTexto;
        case 9:
            nomeMesTexto = 'Outubro'
            return nomeMesTexto;
        case 10:
            nomeMesTexto = 'Novembro'
            return nomeMesTexto;
        case 11:
            nomeMesTexto = 'Dezembro'
            return nomeMesTexto;
        default:
            nomeMesTexto = ' '
    }
}
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}
function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${zeroAEsquerda(data.getDate())} de ${nomeMes} de ` +
        `${data.getFullYear()}, `+
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}
texto.innerHTML = criaData(data);