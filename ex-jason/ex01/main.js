let livros = [
    {
      "titulo": "O Senhor dos Anéis",
      "autor": "J.R.R. Tolkien",
      "ano_publicacao": 1954,
      "genero": "Fantasia"
    },
    {
      "titulo": "1984",
      "autor": "George Orwell",
      "ano_publicacao": 1949,
      "genero": "Ficção Científica"
    },
    {
      "titulo": "Dom Quixote",
      "autor": "Miguel de Cervantes",
      "ano_publicacao": 1605,
      "genero": "Clássico"
    },
    {
      "titulo": "Cem Anos de Solidão",
      "autor": "Gabriel García Márquez",
      "ano_publicacao": 1967,
      "genero": "Realismo Mágico"
    }
  ];


//   Guardando como objeto
  const objLivros = livros;
  

// Stringfizando
  livros = JSON.stringify(livros);
  console.log(livros);
  console.log('Acima é do tipo: ',typeof(livros));


// Objeto
  console.log(objLivros);
  console.log('Acima é do tipo: ',typeof(objLivros));