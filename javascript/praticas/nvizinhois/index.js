function nvizinhos() {
  let n = Number(window.prompt('Digite um número: '));
  document.querySelector('#demo').innerHTML = `O número anterior do ${n} é o ${n-1} e o número seguinte é ${n+1}`;
}

nvizinhos();