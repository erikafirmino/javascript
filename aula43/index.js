// tray catch

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error ('x e y precisam ser números.'); // para o desenhor lançar o erro.
    }
    return x + y;
}
try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    console.log('digite um número valido'); // o Erro a ser axibido para o usuario.
}
