// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).
 //1. criar função de callback que verifica se os numeros são iguais
 const checkNumero = (myNumber, numSorteado) => myNumber === numSorteado;
// 2. cria a função que recebera a callBack de parametro e um numero,
// ela irá gerar um numero aleatório e retornar a função calback e o resultado da condição se ela for true ou false
const resultSorteio = (myNumber, callBack) => {
  const numSorteado = Math.floor((Math.random() * 5) + 1);
  return callBack(myNumber, numSorteado) ? 'Parabéns, você ganhou!' : 'Tente novamente';
};
console.log(resultSorteio(5,checkNumero));