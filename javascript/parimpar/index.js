  document.querySelector('#demo').innerHTML = 'O número é'
function parimpar() {
  let input = Number(window.prompt('Digite o número para saber se é par ou impar'))
  if (input % 2 === 0) {
    document.querySelector('#demo').innerHTML += ' par'
  } else {
    document.querySelector('#demo').innerHTML += ' ímpar'
  }
}

parimpar();