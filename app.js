// app.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


Escreva um programa que solicite ao usuário um número de 1 a 7 
e informe o dia correspondente da semana (por exemplo, 1 para 
segunda-feira, 2 para terça-feira, etc.).

const diasDaSemana = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo"
];

rl.question('Digite um número de 1 a 7 para saber o dia da semana correspondente: ', (input) => {
  const numero = parseInt(input);

  if (numero >= 1 && numero <= 7) {
    console.log(`O dia correspondente é: ${diasDaSemana[numero - 1]}`);
  } else {
    console.log('Número inválido. Por favor, digite um número entre 1 e 7.');
  }

  rl.close();
});
