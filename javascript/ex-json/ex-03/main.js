const produtos = [
    {
      nome: "Produto 1",
      preco: 19.99,
      estoque: 50
    },
    {
      nome: "Produto 2",
      preco: 29.99,
      estoque: 30
    },
    {
      nome: "Produto 3",
      preco: 9.99,
      estoque: 100
    }
  ]

  let precoFiltrado = [
    {}
  ]
  
  function estoque() {
    for (let i = 1; i < produtos.length; i++) {
      if (produtos[i].estoque > produtos[0].estoque) {
        return produtos[i];
      }
    }
  }

  var maisqt = estoque();

// function filtrarPreco() {
//   for (let i = 0; i < produtos.length; i++) {
//     if (produtos[i].preco < 20) {
//       precoFiltrado[i] = produtos[i];
//     }
//   }
// }
// filtrarPreco();
// console.log(precoFiltrado);

function filtrarProdutosPorPrecoMaximo(arrayDeProdutos, precoMaximo) {
  // Usar o método filter para criar um novo array com produtos que atendem à condição
  const produtosFiltrados = arrayDeProdutos.filter(produto => produto.preco <= precoMaximo);
  return produtosFiltrados;
}

const precoMaximo = 20; // Defina o preço máximo desejado

const produtosFiltrados = filtrarProdutosPorPrecoMaximo(produtos, precoMaximo);

console.log(produtosFiltrados);



  
  console.log('Produto com mais quantidade de estoque: ',maisqt);
  // console.log(preco);
