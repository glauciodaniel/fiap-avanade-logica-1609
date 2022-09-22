class Pessoa{
    //atributos ou propriedades
    nome: string;
    idade: number;

    //métodos (Função metida dentro de uma classe)
    constructor(parametroNome: string, parametroIdade:number ){
        this.nome = parametroNome;
        this.idade = parametroIdade;
        console.log(`A pessoa ${this.nome} de Idade ${this.idade} está andando`);
    }

}
export default Pessoa;

