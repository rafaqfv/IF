let alunos = [
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

alunos[5] = {
  nome: "Rafael",
  idade: 17,
  notas: [9, 9.5, 10],
};

// Ver quantas notas tem os alunos
// console.log(alunos[0].notas.length);


var totalNotas = 0;
var qtNotas = 0;

for (var i = 0; i < alunos.length; i++) {
    for (var j = 0; j < alunos[i].notas.length; j++) {
        totalNotas += alunos[i].notas[j];
        qtNotas++;
    }
}

var media = totalNotas / qtNotas;

console.log('Média das notas: ',media.toFixed(2));

console.log(alunos);

var velho = alunos[0];

for (let i = 1; i < alunos.length; i++) {
    if (alunos[i].idade > velho.idade) {
        velho = alunos[i];
    }
}

console.log(velho);