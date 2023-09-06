fetch('http://localhost:3000/filmes')
  .then(response => {
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados do servidor.');
    }
    return response.json();
  })
  .then(data => {
    console.log('Dados do servidor:', data);
    // Faça algo com os dados aqui
  })
  .catch(error => {
    console.error('Erro ao obter os dados do servidor:', error);
  });
