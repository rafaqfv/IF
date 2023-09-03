function pizza() {
  let preco = Number(window.prompt('Informe o preço da pizza: '));
  let nclientes = window.prompt('Informe a quantidade de clientes: ');
  document.querySelector('#demo').innerHTML = 'Valor por cliente: ' + preco / nclientes;
}

pizza();