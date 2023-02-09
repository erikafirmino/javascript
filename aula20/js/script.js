/* 
function meuEspoco(){
    const form =document.querySelector('.form');
    
    *** Exemplo 1 ***
    form.onsubmit = function(evento){
        evento.preventDefault();
        alert(1)
        console.log('foi enviado');
    };
    
    let contador = 1;
    function recebeEventoForm(evento) {
        evento.preventDefault();
        console.log(`form nao foi enviado ${contador}`);
        contador++;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEspoco();
*/
function meuEspoco(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    let contador = 1;
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        contador++;

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${contador}.${nome.value} ${sobrenome.value} <br> ${peso.value} <br> ${altura.value}<p>`
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEspoco();