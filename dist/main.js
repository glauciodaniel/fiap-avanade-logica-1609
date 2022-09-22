"use strict";
const nameUser = "Glaucio Daniel";
const idade = 37;
const statusUser = 1;
//statusUser = 1 - usuario; 2 - empresa 3 - admin
//switch case
switch (statusUser) {
    case 1:
        console.log("Status: Usuario");
        break;
    case 2:
        console.log("Status: Empresa");
        break;
    case 3:
        console.log("Status: Admin");
        break;
    default:
        console.log("Status: Código Inválido");
}
//se condição verdadeira, então, execute algo
if (idade <= 2) {
    console.log("Bebê");
}
else if (idade > 2 && idade <= 11) {
    console.log("Criança");
}
else if (idade > 11 && idade <= 19) {
    console.log("Adolescente");
}
else if (idade > 19 && idade <= 50) {
    console.log("Adulto");
}
else {
    console.log("Idoso");
}
console.log(`Bem vindo(a) ao TypeScript ${nameUser}`);
const yearFactory = 1920;
for (let x = yearFactory; x <= new Date().getFullYear(); x++) {
    console.log(x, " ");
}
console.log("----------------------------------------");
// x -= 10;
// x = x - 10;
for (let x = new Date().getFullYear(); x >= yearFactory; x -= 10) {
    if (x >= 1990 && x < 2000) {
        continue;
    }
    console.log(x, " ");
}
// operadores incrementais e decrementais
// x++ - Operador incremental - pós incremento
// ++x - Operador incremental - pré incremento
// x-- - Operador decremental - pós decremento
// --x - Operador decremental - pré decremento
