// Usando array destructuring, armazene cada nome presente na variável moreStudents em variáveis separadas:
const moreStudents = [
  'Chris', 
  ['Ahmad', 'Antigoni'], 
  ['Toby', 'Sam']
];

// Escreva seu código aqui
const [student1, [student2, student3], [student4, student5]] = moreStudents;// quando há array dentro de array é só fazer dessa forma, uma destructuring dentro da primeira, que destructuring a array principal

console.log(student1, student2, student3, student4, student5);//Chris Ahmad Antigoni Toby Sam