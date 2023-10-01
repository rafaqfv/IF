const fs = require("fs");

function LerJSON(read) {
  const jLIDO = fs.readFileSync(read, "utf-8");
  return jLIDO;
}

function estoque() {
  let maisQt = objLido[0]; // Inicialize com o primeiro produto
  for (let i = 1; i < objLido.length; i++) {
    if (objLido[i].estoque > maisQt.estoque) {
      maisQt = objLido[i]; // Atualize o produto com mais estoque
    }
  }
  return maisQt;
}

function filtrandoProdutos(arrayDeProdutos, precoMaximo) {
  // Usar o método filter para criar um novo array com produtos que atendem à condição
  const produtosFiltrados = arrayDeProdutos.filter(
    (produto) => produto.preco <= precoMaximo
  );
  return produtosFiltrados;
}

const jsonLIDO = LerJSON("produtos.json"); // Ler o JSON antes de usar
let objLido = []; // Inicialize como um array vazio

try {
  objLido = JSON.parse(jsonLIDO); // Fazer a análise JSON e atribuir a objLido

  const precoMaximo = 20;

  let maisqt = estoque();

  console.log(`Array de produtos lido com sucesso.
  `);
  console.log(`Produto com mais estoque: ${maisqt.nome}
  `);
  console.log(
    `Produtos filtrados: ${JSON.stringify(
      filtrandoProdutos(objLido, precoMaximo),
      null,
      2
    )}`
  );
} catch (error) {
  console.log(error);
}
