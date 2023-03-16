// captura evento de submit do formulario
//selecionada atraves do id do formulario

const form = document.querySelector('#form');
// addEventListener() - Uma função que será chamada sempre que o evento especificado for entregue ao destino.
form.addEventListener('submit', function(e) {
e.preventDefault();
const inputPeso = e.target.querySelector('#peso');
const inputAltura = e.target.querySelector('#altura');

const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);

if (! peso){
    setResultado('Peso inválido', false);
    return;
}
if (! altura){
    setResultado('Altura inválida');
    return;
}
const imc = getImc(peso, altura);
const nivelImc = getNivelImc(imc);

const msg = `Seu IMC é ${imc} (${nivelImc})`;

setResultado(msg, true);

});
// Calculo imc
function getImc(peso, altura){
    const imc = peso/altura **2;
    return imc.toFixed(2);
}
// Checagem de nivel
function getNivelImc(imc) {
    const nivel = ['Magreza - Obesidade Grau - 0', 'Normal - Obesidade Grau - 0', 'Sobrepeso - Obesidade - Grau I', 'Obesidade - Grau II', 'Obesidade grave - Grau - III'];

    //não precisa de else if pq o return para a função
    if (imc >= 39.9) return nivel[5]; 
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc <= 18.5) return nivel[0];

}

 //Criando um elemento paragrafo
function criaP(){
    const p = document.createElement('p');
    return p;
}

// função para colocar o resultado na div html
function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

// Para validar, apararecer o resultado na tela
    if (isValid) {
    p.classList.add('paragrafo-resultado');

    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}