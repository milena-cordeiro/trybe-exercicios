let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let result = 0;
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
   // console.log(numbers[index])
}

for (let index = 0; index < numbers.length; index += 1) { // soma todos os números dentro da Array
   // result += numbers[index];
      soma += numbers[index]; 
}

//console.log (result)

let media = soma / numbers.length

//console.log (media)

if (media > 20) {
   //console.log('valor maior que 20')
} else {
   //console.log ('Valor menor ou igual a 20')
}

let maiorNumero = numbers[0];

for(index = 0; index < numbers.length; index += 1) {
   if(numbers[index] > maiorNumero){
      maiorNumero = numbers[index]
      //console.log(maiorNumero)
   }
}

let numeroImpar = numbers[0]

for(index = 0; index < numbers.length; index += 1) {
   if((numbers[index] % 2) !== 0) {
  numeroImpar = numbers[index]
  console.log(numeroImpar)
} else {
   console.log('nenhum valor impar encontrado')
}
}

