//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
//o enunciado pede para exibir a maior palavra do Array e a menor palavra do Array (criar uma variavel para maior palavra e uma variavel para menor palavra);
//como vou saber qual é a menor e a maior palavra? devo contar as letras de cada palavra utilizando o for.
// como conto as letras de cada palavra? o tamanho da string é diferente do tamanho do indice de cada letra, então uso o tamanho da string - 1 para igualar ao indice?

let linguagens = ['java' , 'javascript', 'python', 'html', 'css'];
let maiorPalavra = linguagens[0];
let menorPalavra = linguagens[0];

for (let index = 0; index < linguagens.length; index += 1) {
    if (linguagens[index].length > maiorPalavra.length) {
        maiorPalavra = linguagens[index];
    } else if (linguagens[index].length < menorPalavra.length) {
        menorPalavra = linguagens[index];
    }
}

/*for (index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
 }*/

console.log(menorPalavra);
console.log(maiorPalavra)