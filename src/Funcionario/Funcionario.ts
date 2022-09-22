import Pessoa from '../Pessoa';

class Funcionario extends Pessoa{

  ri: string;
  cpf: string;

constructor(parametroNome: string, parametroIdade: number, parametroRi:string, parametroCpf:string) {
   super(parametroNome, parametroIdade);

    this.ri = parametroRi;
    this.cpf = parametroCpf;

    this.cadFuncionario();
}

    cadFuncionario(){
        console.log(`Funcionário ${this.nome} cadastrado com sucesso!`);
    }
}

export default Funcionario;
const hcoder = new Funcionario('Rafael',23, '12311232131', '123.123.123-10');