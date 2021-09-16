"use strict";
// Crie uma classe chamada Vendedores com os atributos nome, salario e valor da 
// venda. Crie os getters e setters e as validações. Crie um método desconto para 
// calcular 8% do salário.
// Crie uma classe filha chamada Vendedor de Pessoa Física com o atributo região, 
// crie o getter e setter com validação para aceitar somente as regiões sul, sudeste, 
// centro-oeste, norte e nordeste. Crie um método para calcular a comissão. Se a 
// região for sul a comissão será de 10% sobre o valor da venda. Se a região for 
// sudeste a comissão será de 12% sobre o valor da venda, se a região for centro-
// oeste a comissão será de 14% sobre o valor da venda, se a região for norte a 
// comissão será de 15% sobre o valor da venda, Se a região for nordeste a comissão 
// será de 17% sobre o valor da venda. Crie o método para calcular o salário total que 
// será o salario mais a comissão.
// Crie uma classe filha chamada Pessoa Jurídica com os atributos nome da empresa, 
// total de funcionários, crie os getters, setters e as suas validações. Crie um método 
// para calcular a comissão. Se o valor da venda for menor que 5.000,00 o valor da 
// comissão será de 2% sobre o valor da venda. Se o valor da venda for maior ou igual 
// a 5.000,00 e menor que 10.000,00 o valor da comissão será de 4% sobre o valor da 
// venda. Se o valor da venda for maior ou igual a 10.000,00 o valor da comissão será 
// de 6% sobre o valor da venda. Crie um método salario Total que será a soma do 
// salario mais comissão e mais R$ 200,00 se o número de funcionários for menor que 
// 100 ou mais R$ 300,00 se o número de funcionários for maior ou igual a 100.
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
var Vendedores = /** @class */ (function () {
    function Vendedores(nome, salario, valorVenda) {
        this._nome = nome;
        this._salario = salario;
        this._valorVenda = valorVenda;
    }
    Object.defineProperty(Vendedores.prototype, "nome", {
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
    Object.defineProperty(Vendedores.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (salario) {
            if (salario === 0) {
                throw new Error('Salario Invalido');
            }
            this._salario = salario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "valorVenda", {
        get: function () {
            return this._valorVenda;
        },
        set: function (valorVenda) {
            if (valorVenda === 0) {
                throw new Error('Valor Venda Invalido');
            }
            this._valorVenda = valorVenda;
        },
        enumerable: false,
        configurable: true
    });
    Vendedores.prototype.descontoSalario = function (salario) {
        return salario * 0.08;
    };
    return Vendedores;
}());
var VendedorPessoaFisica = /** @class */ (function (_super) {
    __extends(VendedorPessoaFisica, _super);
    function VendedorPessoaFisica(nome, salario, valorVenda, regiao) {
        var _this = _super.call(this, nome, salario, valorVenda) || this;
        _this._regiao = regiao;
        return _this;
    }
    Object.defineProperty(VendedorPessoaFisica.prototype, "regiao", {
        get: function () {
            return this._regiao;
        },
        set: function (regiao) {
            verificaRegiao(regiao);
            this._regiao = regiao;
        },
        enumerable: false,
        configurable: true
    });
    VendedorPessoaFisica.prototype.comissao = function (regiao, valorVenda, salario) {
        regiao = regiao.toLowerCase();
        verificaRegiao;
        var comissao = 0;
        if (regiao === 'sul') {
            comissao = 0.10;
            salario += comissao * valorVenda;
        }
        else if (regiao === 'nordeste') {
            comissao = 0.17;
            salario += comissao * valorVenda;
            return salario;
        }
        else if (regiao === 'norte') {
            comissao = 0.15;
            salario += comissao * valorVenda;
            return salario;
        }
        else if (regiao === 'centro oeste') {
            comissao = 0.14;
            salario += comissao * valorVenda;
            return salario;
        }
        else if (regiao === 'sudeste') {
            comissao = 0.12;
            salario += comissao * valorVenda;
            return salario;
        }
    };
    return VendedorPessoaFisica;
}(Vendedores));
var VendedorPessoaJuridica = /** @class */ (function (_super) {
    __extends(VendedorPessoaJuridica, _super);
    function VendedorPessoaJuridica(nomeEmpresa, totalEmpregados, nome, salario, valorVenda) {
        var _this = _super.call(this, nome, salario, valorVenda) || this;
        _this._nomeEmpresa = nomeEmpresa;
        _this._totalEmpregados = totalEmpregados;
        return _this;
    }
    Object.defineProperty(VendedorPessoaJuridica.prototype, "nomeEmpresa", {
        get: function () {
            return this._nomeEmpresa;
        },
        set: function (nomeEmpresa) {
            if (nomeEmpresa === ' ') {
                throw new Error('Nome invalido');
            }
            this._nomeEmpresa = nomeEmpresa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VendedorPessoaJuridica.prototype, "totalEmpregados", {
        get: function () {
            return this._totalEmpregados;
        },
        set: function (totalEmpregados) {
            if (totalEmpregados = 0) {
                throw new Error('Total de empregados invalid');
            }
            this._totalEmpregados = totalEmpregados;
        },
        enumerable: false,
        configurable: true
    });
    VendedorPessoaJuridica.prototype.comissaoVendaJuridica = function (valorVenda, comissao) {
        if (valorVenda < 5000) {
            valorVenda * 1.02;
            return comissao;
        }
        else if (valorVenda >= 5000 && valorVenda < 10000) {
            valorVenda * 1.04;
            return comissao;
        }
        else {
            valorVenda * 1.6;
            return comissao;
        }
    };
    VendedorPessoaJuridica.prototype.bonusFuncionario = function (totalEmpregados, bonus, salario) {
        if (totalEmpregados < 100) {
            return bonus + salario + 200;
        }
        else {
            return bonus + salario + 300;
        }
    };
    return VendedorPessoaJuridica;
}(Vendedores));
function verificaRegiao(regiao) {
    regiao = regiao.toLowerCase();
    var regioes = ['nordeste', 'sul', 'centro oeste', 'sudeste', 'norte'];
    var verificaRegioes = regioes.filter(function (regioes) { return regioes === regiao; });
    if (!verificaRegioes.length) {
        throw new Error('Região Invalida.');
    }
}
var vendedores = new Vendedores('Gabriel', 5000, 350);
try {
    vendedores.nome = 'Helder';
    vendedores.salario = 10000;
    vendedores.valorVenda = 5000;
    console.log(vendedores.descontoSalario(10000));
    console.log(vendedores);
}
catch (err) {
    console.log(err);
}
var vendedorFisica = new VendedorPessoaFisica('Gabriel', 5000, 30000, 'Sudeste');
try {
    vendedorFisica.nome = 'Felipe';
    vendedorFisica.salario = 5000;
    vendedorFisica.valorVenda = 17000;
    vendedorFisica.regiao = 'Sudeste';
    vendedorFisica.comissao('Centro oeste', 15000, 3000);
    console.log(vendedorFisica);
}
catch (err) {
    console.log(err);
}
var vendedorJuridico = new VendedorPessoaJuridica('Tesla', 5000, 'Gabriel', 7500, 13090);
try {
    vendedorJuridico.nomeEmpresa = 'Ferrari';
    vendedorJuridico.totalEmpregados = 7500;
    vendedorJuridico.nome = 'Enrico';
    vendedorJuridico.salario = 18000;
    vendedorJuridico.valorVenda = 32000;
    vendedorJuridico.comissaoVendaJuridica(10000, 0.5);
    vendedorJuridico.bonusFuncionario(5000, 0.3, 15000);
    console.log(vendedorJuridico);
}
catch (err) {
    console.log(err);
}
