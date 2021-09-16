"use strict";
// Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e 
// quantidade de dias. Crie os getters e setters. No setters crie validações para não 
// aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor 
// zero. Crie um método passeio para receber a quantidade de dias e o valor da 
// locação. O sistema calcule o total que será a multiplicação da quantidade de dias 
// pelo valor da locação.
var Veiculos = /** @class */ (function () {
    function Veiculos(modelo, marca, ano, valorLocacao, qtdeDias) {
        this._modelo = modelo;
        this._marca = marca;
        this._ano = ano;
        this._valorLocacao = valorLocacao;
        this._qtdeDias = qtdeDias;
    }
    Object.defineProperty(Veiculos.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            if (modelo === ' ') {
                throw new Error('Modelo Inexistente');
            }
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            if (marca === ' ') {
                throw new Error('Marca Inexistente');
            }
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            if (ano === 0) {
                throw new Error('Ano Inexistente');
            }
            this._ano = ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "valorLocacao", {
        get: function () {
            return this._valorLocacao;
        },
        set: function (valorLocacao) {
            if (valorLocacao === 0) {
                throw new Error('Valor Inexistente');
            }
            this._valorLocacao = valorLocacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "qtdeDias", {
        get: function () {
            return this._qtdeDias;
        },
        set: function (qtdeDias) {
            if (qtdeDias === 0) {
                throw new Error('Quantidades de dias inexistentes');
            }
            this._qtdeDias = qtdeDias;
        },
        enumerable: false,
        configurable: true
    });
    Veiculos.prototype.passeio = function () {
        return this._qtdeDias * this._valorLocacao;
    };
    return Veiculos;
}());
var veiculos = new Veiculos('Gol', 'Volkswagen', 2021, 250, 13);
try {
    veiculos.modelo = 'CLA 45';
    veiculos.marca = 'Mercedez';
    veiculos.ano = 2020;
    veiculos.valorLocacao = 1000;
    veiculos.qtdeDias = 5;
    console.log(veiculos.passeio());
    console.log(veiculos);
}
catch (error) {
    console.log(error.message);
}
