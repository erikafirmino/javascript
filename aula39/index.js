//while e Do While
//Quando não sabemos quantas vezes vai repetir 
//Tudo depende da condição.


//let i = 0;
//while(i <= 10){
//    console.log(i);
//    i++;
//}

function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = 10;

// While - verifica a condição execulta o laço.

while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}
console.log('#################');

//Do While executa o codigo e depois verifica a condição.

do{
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);