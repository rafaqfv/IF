function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}
numeroMax = window.prompt('Digite um número');



document.querySelector('h1').innerHTML += ': ' + getRandom(numeroMax);