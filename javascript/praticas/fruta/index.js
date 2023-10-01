// 6) Elaborar um programa que leia o nome de uma fruta e um número. O programa deve repetir a
// exibição do nome da fruta, de acordo com o número informado. Utilize o “*” para separar os nomes.
// Exemplo:
// fruta = maça
// numero =2
// saida: maça * maça

function frutas() {
  let fruta = window.prompt('Digite o nome da fruta.');
  let qtf = window.prompt('Digite um número');

  for (let i = 0; i < qtf; i++) {
    document.querySelector('#demo').innerHTML += fruta+ ' ';
  }

}

frutas();