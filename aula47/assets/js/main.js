function relogio() {
    //função para gerar os segundos
    //cria-se uma variavel para guardar a data;
    //essa função vai retornar uma data formatada, colocamos o formato 12hs e timeZone 'UTC'
    function criaSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone:'UTC'
        });
    }

    //selecionamos a tag para inserir as informações
    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');

    let segundos = 0;
    let timer;

    function iniciaRelogio(){
        timer = setInterval(function(){ 
            segundos++;
            relogio.innerHTML = criaSegundos(segundos)
        }, 1000)
    }
    //Captura o evento click no documento por inteiro.
    //cria-se uma variavel para guardar o evento.
    document.addEventListener('click', function(e){
        const el = e.target;

        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
            relogio.classList.add('play');
        }
        if(el.classList.contains('pausar')){
            relogio.classList.remove('play');
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        if(el.classList.contains('zerar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
}
relogio();


//addEventListener, aptura um evento, no caso o click 
//adicinamos uma function para executar uma ação.
// iniciar.addEventListener('click', function(event){
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     iniciaRelogio();
//     relogio.classList.add('play');
// });

// pausar.addEventListener('click', function(event){
//     relogio.classList.remove('play');
//     clearInterval(timer);
//     relogio.classList.add('pausado');
// });
// //classList. (pode adicionar ou remover uma class Css)
// zerar.addEventListener('click', function(event){
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0;
// });
