"use strict";
//sub - está engessada
function escreveConsole() {
    console.log("Vai Corinthians");
}
//function - está livre - dirigido à abstração
function escreve() {
    return "Vai Corinthians";
}
escreveConsole();
console.log(`Quem tem mais títulos: ${escreve()}`);
////////////////////////////////////
// Existem duas categorias de funções.
// Built-in functions - Funções nativas do JS
// User-defined functions - Funções definidas pelo usuário
const empresa = "Avanade";
console.log(empresa.length, empresa.toUpperCase(), empresa.toLowerCase());
const locale = "pt-br";
const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
};
console.log(new Date().toLocaleDateString(locale, options));
//Prettier - linter - formatação de código
const user = {
    name: "João",
    age: 25,
    email: 'joao@gmail.com',
    address: {
        street: 'Avenida Principal',
        number: 1000,
        complement: 'Fundos',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01311-100'
    },
    cpf: '123.456.789-00'
};
