//sub - está engessada
function escreveConsole(): void {
  console.log("Vai Corinthians");
}
//function - está livre - dirigido à abstração
function escreve(): string {
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

const locale: string = "pt-br"; 
const options: Intl.DateTimeFormatOptions = {
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

type addressType = {
  street: string;
  number: number;
  complement?: string;
  city: string;
  state: string;
  country?: string;
  zipCode: string;
}


type userType = {
  name: string;
  age: number;
  email: string;
  address: addressType;
  cpf?: string;
}

//Prettier - linter - formatação de código
const user: userType = { 
  name: "João",
  age: 25,
  email:'joao@gmail.com',
  address: { 
    street:'Avenida Principal',
    number:1000,
    complement:'Fundos',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01311-100'
   },
  cpf: '123.456.789-00'
};



