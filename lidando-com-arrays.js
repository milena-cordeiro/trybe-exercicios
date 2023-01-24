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

console.log (media)