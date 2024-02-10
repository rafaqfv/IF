// JSON -> JavaScript OBJECT Notation

const alunos = [
  {
    nome: "carlos",
    idade: 18,
    notas: [8, 9, 10],
  },
  {
    nome: "Rafael",
    idade: 17,
    notas: [10, 10, 10],
  },
  {
    nome: "Josias",
    idade: 32,
    notas: [5, 6, 7],
  },
];

const total = alunos.reduce(
  (soma, aluno) => soma + aluno.notas.reduce((a, b) => a + b, 0),0
);
console.log(total);
