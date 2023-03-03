// Corretor automático de exame
// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let pontuacao = 0;
RIGHT_ANSWERS.some((answer) => answer === 'A');
// Vamos criar nossa callback. Ela deve verificar se a resposta do aluno está certa, errada ou se é inexistente, e assim atribuir a devida pontuação.
const comparaResposta = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } if(studentAnswers === 'N.A') {
    return 0
  }
  return -0.5
}
// Iniciaremos nossa HOF, que receberá os mesmos parâmetros da callback mais a callback em si. Para contagem dos pontos, teremos um contador que será alterado por um loop for que irá percorrer o array de respostas corretas. Vamos começar com essa estrutura.
const countPoint = (rightAnswers, studentAnswers, callBack) => {
  let pontuacao = 0;
  // rightAnswers.forEach((answer) => {
  //   const actionReturn = callBack(rightAnswers, studentAnswers);
  // pontuacao += actionReturn;
  // })
  for(let i = 0; i < rightAnswers.length; i += 1) {
  const actionReturn = callBack(rightAnswers[i], studentAnswers[i]);
  pontuacao += actionReturn;
  }
  return `Resultdo final: ${pontuacao} pontos`;
}

console.log(countPoint(RIGHT_ANSWERS,STUDENT_ANSWERS, comparaResposta));