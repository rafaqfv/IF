class Calculadora {
    somar(n1, n2) {
        return (n1 + n2);
    }
    subtrair(n1, n2) {
        return (n1 - n2);
    }
    multiplicar(n1, n2) {
        return (n1 * n2);
    }
    dividir(n1, n2) {
        return (n1 / n2);
    }
}

const minhaCalculadora = new Calculadora();
console.log(minhaCalculadora.somar(2,6));
console.log(minhaCalculadora.multiplicar(2, 3));
console.log(minhaCalculadora.dividir(2, 9));
console.log(minhaCalculadora.subtrair(2, 9));