class Car {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    ligarCarro() {
        return console.log('O carro está ligado!');
    }
    desligarCarro() {
        return console.log('O carro está desligado!');
    }
}

const meuCarro = new Car('Pagani','Horacio');
meuCarro.ligarCarro();
console.log();
meuCarro.desligarCarro();