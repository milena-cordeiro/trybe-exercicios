//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let number = 10;
let fatorial = 1;

for (let numero = number; numero > 0; numero -= 1) {
  fatorial = fatorial * numero;
}

console.log(fatorial);