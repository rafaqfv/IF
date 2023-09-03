// 8) Um determinado clube de futebol pretende classificar seus atletas em categorias e para isto ele
// contratou um programador para criar um programa que executasse esta tarefa. Para tanto, o clube
// criou uma tabela que continha a faixa etária do atleta e sua categoria. A tabela está demonstrada
// abaixo:
// IDADE CATEGORIA
// De 05 a 10 Infantil
// De 11 a 15 Juvenil
// De 16 a 20 Junior
// De 21 a 25 Profissional
// Faça um programa que receba o ano de nascimento do atleta, calcule sua idade e indique a
// categoria.

document.querySelector('#demo').innerHTML = 'Este jogador é '

function categoria() {
  let born = Number(window.prompt('Digite o ano que nasceu'));
  var today = new Date();
  var year = today.getFullYear();
  let idade = year - born;

  if (idade >= 5 && idade <=10) {
    document.querySelector('#demo').innerHTML += 'Infantil';
  }
  if (idade > 10 && idade <= 15) {
    document.querySelector('#demo').innerHTML += 'Juvenil';
  }
  if (idade >= 16 && idade <= 20 ) {
    document.querySelector('#demo').innerHTML += 'Junior';
  }
  if (idade >= 21 && idade <= 25) {
    document.querySelector('#demo').innerHTML += 'Profissional';
  }

}

categoria();