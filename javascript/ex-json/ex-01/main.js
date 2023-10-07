const livros = [
  {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano_publicacao: 1954,
    genero: "Fantasia",
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    ano_publicacao: 1949,
    genero: "Ficção Científica",
  },
  {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    ano_publicacao: 1605,
    genero: "Clássico",
  },
  {
    titulo: "Cem Anos de Solidão",
    autor: "Gabriel García Márquez",
    ano_publicacao: 1967,
    genero: "Realismo Mágico",
  },
];

const fs = require("fs");

fs.writeFile('livros.json', JSON.stringify(livros, null, 2), 'utf-8', (error, result) => {
  if (error) {
    console.error(error);
  }
});


try {
  const livroJS = fs.readFileSync('livros.json','utf-8');
  const livroOBJ = JSON.parse(livroJS);
  console.log(livroOBJ);
  
} catch (error) {
  console.error(error)
}
