let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let result = 0;
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
   // console.log(numbers[index])
}
//Calcule e imprima a média aritmética dos valores contidos no array (result+=numbers[index])
//Some todos os valores contidos no array e imprima o resultado (soma+=numbers[index])
for (let index = 0; index < numbers.length; index += 1) { // soma todos os números dentro da Array
   // result += numbers[index];
      soma += numbers[index]; 
}

//console.log (result)

let media = soma / numbers.length

//console.log (media)

//Com base no código que acima, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (media > 20) {
   //console.log('valor maior que 20')
} else {
   //console.log ('Valor menor ou igual a 20')
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = numbers[0];

for(index = 0; index < numbers.length; index += 1) {
   if(numbers[index] > maiorNumero){
      maiorNumero = numbers[index]
      //console.log(maiorNumero)
   }
}

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let numeroImpar = numbers[0]

for(index = 0; index < numbers.length; index += 1) {
   if((numbers[index] % 2) !== 0) {
  numeroImpar = numbers[index]
  //console.log(numeroImpar)
} else {
   //console.log('nenhum valor impar encontrado')
}
}

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numeroMenor = numbers[0]

for (index = 0; index < numbers.length; index += 1) {
   if (numbers[index] < numeroMenor) {
      numeroMenor = numbers[index]
      //console.log(numeroMenor)
   }
}

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let novoArray = []
for (let index = 1; index <= 25; index += 1) {
   novoArray.push(index)
}
console.log(novoArray)

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < novoArray.length; index += 1) {
   console.log (novoArray[index] / 2)
}