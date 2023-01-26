//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
// quando falamos divisivel por, o numero deve ser divisivel por com resto 0, no caso utilizamos o modulo (%)
// o enunciado pede para imprimir no console o maior número primo entre 2 e 50, primeiramente declaramos uma variavel para guardar esse número
// Primeiro temos que identificar os números que são primos,depois o maior deles

let maiorNumPrimo = 0;


for (let numbers = 2; numbers <= 50; numbers += 1) {
    let primo = true;
    for (let divisor = 2; divisor < numbers; divisor += 1) {
        if (numbers % divisor === 0) {
            primo = false;
        }
    }
   
if (primo === true) {
    maiorNumPrimo = numbers;
}

}

console.log(maiorNumPrimo);