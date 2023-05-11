//Escreva uma função que recebe um número e returna o seguinte:
//Número é divisivel por 3 = Fizz
//Número é divisivel por 5 = Buzz
//Número é divisivel por 3 e 5 = FizzBuzz
//Número é não é divisivel por 3 e 5 = Retorna o proprio número.
//Use a função com núneros de 0 a 100

function fizzBuzz(numero){
    if(typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero
}
for (let i = 0; i <= 100; i++){
    console.log(i,fizzBuzz(i));
}