function mediaNotas() {
  let n1 = Number(window.prompt('Digite a primeira nota: '));
  let n2 = Number(window.prompt('Digite a segunda nota: '));


  document.querySelector('#demo').innerHTML = 'Média das notas: ' + (n1 + n2) / 2;
}

mediaNotas();