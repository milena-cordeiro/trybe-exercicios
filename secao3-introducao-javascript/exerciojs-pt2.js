/*const num1 = 25;
const num2 = 67;
const num3 = 40;

let isEven = false;

if ((num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0)) {
    isEven = true;
}
console.log(isEven)

const n1 = 5;
const n2 = 6;
const n3 = 7;

let isOdd = false;

if ((n1 % 2 !== 0 || n2 % 2 !== 0 || n3 %2 !== 0)) {
    isOdd = true;
}

console.log(isOdd)*/

/*const custoProduto = 15;
const valorVendaProd = 30;

if (custoProduto >= 0 && valorVendaProd >=0) {
    const custoTotalProd = custoProduto * 1.2;
    const lucro = (valorVendaProd - custoTotalProd) * 1000;
    console.log (lucro)
} else {
    console.log ('Erro! Valores não podem ser negativos')
}*/

let aliqInss;
let aliqIr;
const salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
    aliqInss = salarioBruto * 0,08;
} else if (salarioBruto <= 2594.92) {
    aliqInss = salarioBruto * 0,09;
} else if (salarioBruto <= 5189.82) {
    aliqInss = salarioBruto * 0,11;
} else {
    aliqInss = 570.88;
}

const salarioBase = salarioBruto - aliqInss

if (salarioBase <= 1903.98) {
    aliqIr = 0;
} else if (salarioBase <= 2826.65) {
    aliqIr = (salarioBase * 0,075) - 142.80;
} else if (salarioBase <= 3751.05) {
    aliqIr = (salarioBase * 0.15) - 354.80;
}else if (salarioBase <= 4664.68) {
    aliqIr = (salarioBase * 0,225) - 636.13;
} else {
    aliqIr = (salarioBase * 0,275) - 869,36;
}

console.log ('Salário:' + (salarioBase-aliqIr));