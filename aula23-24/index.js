
let hora = 24;

if(hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde');
} else if(hora >= 18 && hora <= 23){
    console.log('Boa noite');
} else {
    console.log('Hora errada');
}
/* 

if - Pode ser usado sozinho.
else if - Posso ter varios na condicao (preciso de um if antes).
else - So posso ter um else no final da checagem (nao tem condisao associada)

* Ele acaba o bloco quando acha a primeira condicao verdadedira.

*/