"use strict";
//este arquivo serve para importarmos
//mais facilmente a classe Pessoa. import Pessoa from './Pessoa';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa")); //importando do Pessoa.ts
exports.default = Pessoa_1.default; //este arquivo passa a ser um redirect
