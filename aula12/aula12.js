let varA = 'A';
let varB = 'B';
let varC = 'c';
let varD;

varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);

// Jeito mais simples de resolver

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);