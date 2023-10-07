
const alunos = [
  {
    nome: "João",
    idade: 18,
    notas: [8.5, 7.0, 9.2],
  },
  {
    nome: "Maria",
    idade: 17,
    notas: [9.0, 8.5, 7.8],
  },
  {
    nome: "Pedro",
    idade: 19,
    notas: [7.5, 8.0, 8.7],
  },
  {
    nome: "Ana",
    idade: 18,
    notas: [7.8, 8.2, 9.5],
  },
  {
    nome: "Carlos",
    idade: 17,
    notas: [8.0, 7.5, 8.9],
  },
];
const fs = require('fs');

function LerJSON(){
  const lido = fs.readFileSync('alunos.json', (alunos, null, 2), 'utf-8');
  return lido;
}

function EscreverJSON() {
  fs.writeFileSync('./alunos.json', JSON.stringify(alunos, null, 2), 'utf-8');
}

let objALUNO = [];

function addAluno(aluno) {
  objALUNO.push(aluno);
}

  // Função para calcular a média das notas
function mediaNotas() {
    let soma = 0;
    for (let i = 0; i < objALUNO.length; i++) {
      for (let j = 0; j < 3; j++) {
        soma += objALUNO[i].notas[j];
      }
    }
    const arrayLength = objALUNO.length;
    const media = soma / (arrayLength * 3);
    return Number(media.toFixed(2));
}

  // Função para encontrar o aluno mais velho
function alunoVelho() {
    let maisVelho = objALUNO[0];
    for (let i = 1; i < objALUNO.length; i++) {
      if (objALUNO[i].idade > maisVelho.idade) {
        maisVelho = objALUNO[i];
      }
    }
    return maisVelho;
}

try {
  // Escrevendo, lendo e armazenando em uma variável como JSON e depois OBJETO
  EscreverJSON();
  const alunosJS = LerJSON();
  objALUNO = JSON.parse(alunosJS);

  // Exibindo resultados
  console.log(`Média de nota dos alunos: ${mediaNotas()}.`);
  console.log(`O aluno mais velho é ${alunoVelho().nome} com ${alunoVelho().idade} anos.`);
  
} catch (error) {
  console.error(error);
}