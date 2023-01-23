/*const a = 10;
const b = 5;
                      // resposta gabarito
let soma = a + b;
console.log(soma) // console.log ('soma: ' + (a + b))

let sub = a - b;
console.log(sub) // console.log ('subtração: ' + (a - b))

let mult = a * b;
console.log(mult) // console.log ('multiplicação: ' + (a * b))

let divi = a / b;
console.log(divi) // console.log ('divisão: ' + (a / b))

let mod = a % b;
console.log(mod)*/ // console.log ('modúlo: ' + (a % b))

/*const num1 = 20;
const num2 = 25;

if (num1 > num2) {
    console.log('Num2 é maior que num2')
} else {
    console.log ('Num 2 é maior que num1')
}*/

/*const n1 = 25;
const n2 = 34;
const n3 = 15;

if (n1 > n2 && n1 > n3) {
    console.log('n1 é maior número entre os três')
} else if (n2 > n1 && n2 > n3) {
    console.log ('n2 é o maior número entre os três')
} else {
    console.log ('n3 é o maior número entre os três')
} */

/*const numero = 20;

if (numero > 0) {
    console.log('Positivo')
} else if ( numero < 0) {
    console.log ('Negativo')
} else {
    console.log ('zero')
}*/

/*const a = 80;
const b = 50;
const c = 50;
const soma = a + b + c;
const todosPositivos = a > 0 && b > 0 && c > 0;

if (todosPositivos) {
    if (soma === 180) {
        console.log ('True')
    } else {
        console.log ('False')
    }
} else {
    console.log ('Erro, algum número inválido')
}*/

/*const peçaXadrez = 'peão';

switch (peçaXadrez.toLowerCase()) {
    case 'rei':
        console.log ('Rei-> Uma casa apenas para qualquer direção')
        break;
    case 'bispo':
        console.log ('Bispo-> Diagonal.')
        break;
    case 'rainha':
        console.log ('Rainha-> Diagonal, horizontal e vertical.')
        break;
    case 'torre':
        console.log('Torre -> Horizontal e vertical.')
        break;
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.')
        break;
    case 'peão':
        console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.')
        break;
    default:
        console.log('Erro, peça inválida')
        break;
}*/

const porcent = 45;

if (porcent < 0 || porcent > 100) {
    console.log ('Erro, valor inválido!');
} else if (porcent >= 90) {
   console.log ('A');
} else if (porcent >= 80) {
    console.log ('B');
} else if (porcent >= 70) {
    console.log ('C');
} else if (porcent >= 60) {
    console.log ('D');
} else if (porcent >= 50) {
    console.log ('E');
} else {
    console.log ('F')
}