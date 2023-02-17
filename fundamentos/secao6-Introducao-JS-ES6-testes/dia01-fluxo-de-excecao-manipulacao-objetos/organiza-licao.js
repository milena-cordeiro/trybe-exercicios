  // Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código:
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
//primeiro vamos guardar em variaveis os parametros da função
//criamos a função com três parametros
//dentro da função chamamos o objeto a ser modificado e adicionamos a ele a nova propriedade e o valor dela
const objModified = lesson2;
const novaChave = 'turno';
const valorDaChave = 'noite';

const adicionaChave = (objeto, chave, valor) => {
  objeto[chave] = valor;
}

adicionaChave(objModified, novaChave, valorDaChave);

console.log(lesson2);
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
//qual o metodo que lista as keys de um objeto retornando uma array? Object.keys()
//pede para criar uma função 
// os parametros da função serão apenas o ojeto a ser listado as keys
// e dentro da função utilizamos o metodo Object.Keys() dentro de um console para exibir o array de chaves
// e por fim chamamos a função com o objeto de parametro


const listKeys = (objeto) => {
  
 return Object.keys(objeto);
}

console.log(listKeys(lesson2));

// Crie uma função para mostrar o tamanho de um objeto
//qual propriedade usa para saber o tamanho de um objeto? dá pra usar o Object.keys() colocando a proprieda .length na frente 
// como usa o Objet.keys para saber o tamanho do objeto:
//1.cria uma variavel que guarda o tamanho
//2. chame o object.keys(objeto).length e atribua a variavel criada
// colocar a variavel que guarda o tamanho do objeto dentro de console.log e chamar a função;

const tamanhoObject = (objeto) => {
  const tamanhoObjeto = Object.keys(objeto).length;
   return tamanhoObjeto;
}

console.log(tamanhoObject(lesson3));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// Qual o metodo que retorna um array de valores de um objeto? Object.values();
// temos que criar uma função que listeos valores do objeto
// a função deve receber um objeto como parametro
// para vizualizar a lista colocamos ela numa variavel e colocamos a função para retornar essa variavel
// chamamos a função dentro de um console.log

const listValues = (objeto) => {
  const listOfValues = Object.values(lesson1);
  return listOfValues;
}

console.log(listValues(lesson3));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. 
//devemos criar um objeto vazio para receber as propriedades e valores dos objetos de origem
// para adicionar o conteudo dos objetos existentes, no objeto novo, utilizamos o Object.assign() no qual o objeto novo será o de parametro inicial que ira receber dentro dele os parametros restantes
//crie o objeto vazio
// chame ele no metodo Object.assign() juntamente com cada um dos objetos de origem (chamar eles dentro de chaves para não subscrever)
//execute o console.log com o novo objeto dentro
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// crie uma função que retorne o número total de estudantes em todas as aulas.
//pede para criar uma função com o número total de estudantes em todas as aulas
// o numero de estudantes fica na proprieda numeroEstudantes dentro do objeto de cada lição
// como acessar o numero de estudantes? buscando dentro dos objetos
// ao acessar o numero de estudantes, guardemos dentro de variaveis
// e criamos a função que vai somar todas as variaveis que contem os número de estudantes e retornar o resultado
const totalStudents = () => {
  const numStudentsL1 = allLessons.lesson1.numeroEstudantes;
  const numStudentsL2 = allLessons.lesson2.numeroEstudantes;
  const numStudentsL3 = allLessons.lesson3.numeroEstudantes;
  const resultado = numStudentsL1 + numStudentsL2 + numStudentsL3;
  return resultado;  
}

console.log(totalStudents());

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. Exemplo
