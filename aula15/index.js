let num1 = 9.54578;

//Arredonda para menos
let num2 = Math.floor(num1)
console.log(num2) 

//Arredonda para mais
let num3 = Math.ceil(num1) 
console.log(num3)

//Arredonda para o mais proximo
let num4 = Math.round(num1)
console.log(num4)

//Diz qual o maior
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500))

//Diz qual o menor
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500))

//Numero aleatorio entre 0 e 1 (1 nao eh incluido)
console.log(Math.random())

//Numero aleatorio entre 5 e 10
console.log(Math.random() * (10 - 5) + 5)

//Potencia
console.log(Math.pow(2, 10))

// valor de pi
console.log(Math.PI)