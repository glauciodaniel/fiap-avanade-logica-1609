import Pessoa from '../Pessoa';

class Funcionario extends Pessoa{
//encapsulamento. modificador de acesso.
//public - Todo mundo tem acesso
//protected - Todos do mesmo ambiente, e alguns que tem acesso a esse ambiente.
//private - Só no mesmo ambiente.
//static - Atributo ou método estático. Não precisa instanciar a classe para acessar.
  static ipAddress: string = '127.0.0.1';
  private _salario: number = 0;
  public ri: string;
  public cpf: string;

constructor(
    parametroNome: string,
    parametroIdade: number,
    parametroRi:string,
    parametroCpf:string,
    parametroSalario: number
    ) {
   super(parametroNome, parametroIdade);
   //getter & setter - get - pegar, quando alguém solicitar o valor do atributo _salario.
        //get vai retornar a informação.
        //set - setar, quando alguém quiser alterar o valor do atributo _salario.
    this.salario = parametroSalario;
    this.ri = parametroRi;
    this.cpf = parametroCpf;

    this.cadFuncionario();

}

    get salario(){
        return this._salario;
    }

    set salario(value:number){
        if(value <= 1200){
            this._salario = 1200;
        }else{
            this._salario = value;
        }
    }
   public cadFuncionario(){
        console.log(`Funcionário ${this.nome} cadastrado com sucesso! Ganha ${this.salario}`);
    }
}

export default Funcionario;
const hcoder = new Funcionario('Rafael',23, '12311232131', '123.123.123-10', 1000);
console.log(hcoder.nome,' Acessando diretamente o objeto, afinal é protected');

console.log("Acessando informação estática", Funcionario.ipAddress);