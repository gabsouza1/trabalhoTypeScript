"use strict";
// Crie uma classe para calcular o imposto de renda. Crie uma classe Pai com os 
// atributos nome e renda anual. Crie os getters e setters com as suas validações. Crie 
// uma classe filha Pessoa Física para herdar da classe Pai e com o atributo gastos 
// com saúde, crie os getter e setter com a validação. Crie uma classe filha Pessoa 
// Jurídica para herdar da classe Pai e com o atributo número de funcionários. Crie o 
// getter e o setter com a validação.
// Regras para os cálculos
// Pessoa Física: Pessoas cuja renda foi abaixo de 20.000,00 pagam 15% de imposto. 
// Pessoas com renda maior ou igual a 20.000,00 pagam imposto de 25%. Se a 
// pessoa teve gastos com saúde, 50% destes gastos são abatidos no imposto. 
// Exemplo: Se uma pessoa cuja renda foi de 50.000,00 e teve 2.000,00 em gastos 
// com saúde, o imposto fica: (50.000,00 * 25%) - (2000 * 50%) = 11.500,00
// Pessoa Jurídica: Pessoas jurídicas pagam 16%  de imposto, porém, se a empresa 
// possuir mais de 10 funcionários, ela paga 14% de imposto. Exemplo: Uma empresa 
// Trabalho de POO I2cuja renda foi de 400.000,00 e possui 25 funcionários, o imposto fica: 400.000,00 * 
// 14% = 56.000,00
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ImpostoRenda = /** @class */ (function () {
    function ImpostoRenda(nome, rendaAnual) {
        this._nome = nome;
        this._rendaAnual = rendaAnual;
    }
    Object.defineProperty(ImpostoRenda.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome === ' ') {
                throw new Error('Nome Invalido');
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImpostoRenda.prototype, "rendaAnual", {
        get: function () {
            return this._rendaAnual;
        },
        set: function (rendaAnual) {
            if (rendaAnual === 0) {
                throw new Error('Renda Anual Invalida');
            }
        },
        enumerable: false,
        configurable: true
    });
    return ImpostoRenda;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(gastoSaude, nome, rendaAnual) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this._gastoSaude = gastoSaude;
        return _this;
    }
    Object.defineProperty(PessoaFisica.prototype, "gastoSaude", {
        get: function () {
            return this._gastoSaude;
        },
        enumerable: false,
        configurable: true
    });
    PessoaFisica.prototype.pessoaFisica = function (rendaAnual, gastoSaude) {
        if (rendaAnual < 20000) {
            return rendaAnual * 1.15;
        }
        else if (rendaAnual < 20000 && gastoSaude > 0) {
            return (rendaAnual * 0.15) - (gastoSaude * 0.5);
        }
        else if (rendaAnual > 2000 && gastoSaude > 0) {
            return (rendaAnual * 0.15) - (gastoSaude * 0.5);
        }
    };
    return PessoaFisica;
}(ImpostoRenda));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(nome, rendaAnual, numDeFuncionarios) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this._numDeFuncionarios = numDeFuncionarios;
        return _this;
    }
    Object.defineProperty(PessoaJuridica.prototype, "numDeFuncionarios", {
        get: function () {
            return this._numDeFuncionarios;
        },
        set: function (numDeFuncionarios) {
            if (numDeFuncionarios === 0) {
                throw new Error("Quantidade de funcionarios invalidos");
            }
            this._numDeFuncionarios = numDeFuncionarios;
        },
        enumerable: false,
        configurable: true
    });
    PessoaJuridica.prototype.pessoaJuridica = function (rendaAnual, numDeFuncionarios) {
        if (numDeFuncionarios < 10) {
            return rendaAnual * 0.16;
        }
        else {
            return rendaAnual * 0.14;
        }
    };
    return PessoaJuridica;
}(ImpostoRenda));
var imposto = new ImpostoRenda('Gabriel', 200000);
console.log(imposto);
try {
    imposto.nome = ' ';
    imposto.rendaAnual = 0;
    console.log(imposto);
}
catch (err) {
    console.log(err.message);
}
var pessoajuridica = new PessoaJuridica('Gabriel', 2000000, 3);
console.log(pessoajuridica);
console.log(pessoajuridica.pessoaJuridica(100000, 7));
try {
    pessoajuridica.numDeFuncionarios = 0;
    console.log(pessoajuridica);
}
catch (err) {
    console.log(err.message);
}
