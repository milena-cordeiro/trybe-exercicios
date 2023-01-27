//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

/*Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/
//ADIÇÃO
function soma(a,b) {
    let result = a + b;
    return result;
}
console.log(soma(25,15));
//SUBTRAÇÃO
function sub (a,b) {
    let result = a - b;
    return result;
}

console.log(sub(25,15));

// MULTIPLICAÇÃO
function mult(a,b) {
    let result = a * b;
    return result;
}

console.log(mult(5,2));

// DIVISÃO
function divide(a,b) {
    let result = a / b;
    return result;
}

console.log(divide(4,2));

//MODULO
function mod(a,b){
    let result = a % b;
    return result;
}

console.log(mod(8,2));

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNumero (num1,num2) {
    if (num1 > num2) {
        return 'O número ' + num1  +  ' é maior que '  +  num2
    } else if (num2 > num1) {
        return 'O número ' + num2  + ' é maior que '  + num1 
    }else {
        return 'Os números são iguais';
    }   
}
console.log(maiorNumero(25,80));

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorDeTres (num1,num2,num3) {
    if (num1 > num2 && num1 > num3) {
return 'O número ' + num1  +  ' é maior que o número '  +  num2 + ' e o número ' + num3
    } else if (num2 > num1 && num2 > num3) {
return 'O número ' + num2  +  ' é maior que o número '  +  num1 + ' e o número ' + num3
    } else if (num3 > num1 && num3 > num2) {
return 'O número ' + num3  +  ' é maior que o número '  +  num2 + ' e o número ' + num1
    } else {
        return 'Os números são iguais'; 
    }
}

console.log(maiorDeTres(80,80,80));

//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function positivoNegativo (numero) {
    if (numero > 0) {
        return 'positive'
    } else if (numero < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}

console.log(positivoNegativo(-2));

//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.Um ângulo será considerado inválido se não tiver um valor positivo.

function angulosTriangulo (angulo1,angulo2,angulo3) {
    let soma = angulo1 + angulo2 + angulo3
    let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0
    if (angulosPositivos) {
        if (soma === 180) {
            return true;
        } else {
            return false;
        }
    } else {
        return '[Error] Ângulo inválido';
    }
}

console.log (angulosTriangulo(50,50,80));