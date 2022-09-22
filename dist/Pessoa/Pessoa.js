"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    //atributos ou propriedades
    nome;
    idade;
    //métodos (Função metida dentro de uma classe)
    constructor(parametroNome, parametroIdade) {
        this.nome = parametroNome;
        this.idade = parametroIdade;
        console.log(`A pessoa ${this.nome} de Idade ${this.idade} está andando`);
    }
}
exports.default = Pessoa;
