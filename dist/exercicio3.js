"use strict";
// Crie uma classe Fatura com  os atributos números, descrição, quantidade 
// Comprada e preço. Crie um método valor da Fatura para multiplicar a quantidade 
// comprada pelo preço.
var Fatura = /** @class */ (function () {
    function Fatura(numeros, descricao, qtdade, preco) {
        this._numeros = numeros;
        this._descricao = descricao;
        this._qtdade = qtdade;
        this._preco = preco;
    }
    Fatura.prototype.valorDaFatura = function () {
        return this._qtdade * this._preco;
    };
    return Fatura;
}());
var fatura = new Fatura(1, 'PC gamer', 4, 6350);
console.log(fatura);
console.log(fatura.valorDaFatura());
