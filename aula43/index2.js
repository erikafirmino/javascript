
try{
    // É executado quando não há erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo');
    console.log('Fechei o arquivo');
} catch (e) {
    // É executado quando há erros
    console.log('Tratandoo erro');
} finally{
    // É executado sempre 
    console.log('FINALLY: Eu sempre sou execultado');
}