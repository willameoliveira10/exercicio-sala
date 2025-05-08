// // app.js
const readline = require("readline-sync");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// 1-Escreva um programa que solicite ao usuário um número de 1 a 7 
// e informe o dia correspondente da semana (por exemplo, 1 para 
// segunda-feira, 2 para terça-feira, etc.).

// const diasDaSemana = [
//   "Segunda-feira",
//   "Terça-feira",
//   "Quarta-feira",
//   "Quinta-feira",
//   "Sexta-feira",
//   "Sábado",
//   "Domingo"
// ];

// rl.question('Digite um número de 1 a 7 para saber o dia da semana correspondente: ', (input) => {
//   const numero = parseInt(input);

//   if (numero >= 1 && numero <= 7) {
//     console.log(`O dia correspondente é: ${diasDaSemana[numero - 1]}`);
//   } else {
//     console.log('Número inválido. Por favor, digite um número entre 1 e 7.');
//   }

//   rl.close();
// });

// 3-Crie uma função vendaHotDogs que recebe n (quantidade de hotdogs). 
// Dependendo da quantidade, o preço unitário varia: 
// Quantidade de hotdogs                             Preço por unidade (centavos)
// n < 5                                                        100 
// 5 ≤ n < 10                                                    95 
// n ≥ 10                                                        90 
// 
// function vendaHotDogs (n) {
//   let precoUni;
//   if ( n < 5) {
//     precoUni = 100;
// }
//   else if (n >= 5 && n < 10){
//     precoUni = 95;
// }
//   else {
//   precoUni = 90;
// }
// console.log(`\nVocê comprou ${n} hotdog(s).`);
// console.log(`Preço unitário: ${precoUni} centavos`);
// }
// let quantidade = parseInt(readline.question("Digite a quantidade de hotdogs que deseja comprar: "));

// vendaHotDogs(quantidade);

// 4- Escreva uma função que remova todas as vogais de uma string de entrada.
// Exemplo:
// "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"

// function removeVogais(str) {
//     return str.replace(/[aeiouAEIOU]/g, '');
//    }
//     let frase = readline.question("Digite uma frase para remover as vogais: ");
//     let resultado = removeVogais(frase);
//     console.log("Frase sem vogais:", resultado);

// 2-Escreva um algoritmo que construa um menu de cadastro com as opções:
// C) Create	(Cadastrar/Inserir)
// R) Read	(Buscar/Ler)
// U) Update	(Editar/Atualizar)
// D) Delete	(Excluir/Apagar)

const menuDeCadastro = () => {
  console.log(
    `
    C) Create   (Cadastrar/Inserir)
    R) Read     (Buscar/Ler)
    U) Update   (Editar/Atualizar)
    D) Delete   (Excluir/Apagar)
    `
  );

  const menu = readline.question("Digite uma opcao: ").toUpperCase();

  switch (menu) {
    case "C":
      console.log("Cadastrar");
      break;
    case "R":
      console.log("Ler");
      break;
    case "U":
      console.log("Atualizar");
      break;
    case "D":
      console.log("Deletar");
      break;
    default:
      console.log("Opção inválida");
  }

};
menuDeCadastro();

