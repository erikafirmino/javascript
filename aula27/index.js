// operador ternario
// condição ? se verdade : se falso

/*
let pontuacaoUsuario = 900

if(pontuacaoUsuario >= 100){
    console.log('Usuário vip');
} else {
    console.log('Usuário normal');
}
*/

// Operador ternario
let pontuacaoUsuario = 900;
let nivelUsuario = pontuacaoUsuario >= 100 ? 'Usuário vip' : 'Usuário normal';

// Setando uma informação
let corUsuario = null;
let corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);