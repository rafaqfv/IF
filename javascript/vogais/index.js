function  vogais() {
  let qtvogal=0;

  let vogal = window.prompt('Digite uma palavra: ');
  vogal = vogal.toLowerCase();

  for (let i = 0; i < vogal.length; i++) {
    if (vogal.charAt(i) == 'a' || vogal.charAt(i) == 'e' || vogal.charAt(i) == 'i'
    || vogal.charAt(i) == 'o' || vogal.charAt(i) == 'u') {
      qtvogal++;
    }
  }
  document.querySelector('#demo').innerHTML = 'A palavra têm ' +qtvogal+ ' vogais.'
}

// vogais();