
function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}
//setInterval = execulta a função em determinados espaços de tempo
const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);
//setTimeout = encerra o setInterval no tempo especifico
setTimeout(function(){
    clearInterval(timer);
}, 5000);
//Exibe ou execulta uma ação em uma tempo determinado
setTimeout(function(){
    console.log('Óla Mundo!');
}, 6000);