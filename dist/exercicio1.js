"use strict";
// Crie uma classe Pessoa com os atributos nome, sexo e idade. Crie os getters e 
// setters. No setters valide se o nome for em branco retorne uma mensagem de nome 
// inválido. Se o sexo for diferente de Masculino ou Feminino retorne uma mensagem 
// inválida. Se a idade for 0 retorne uma mensagem de idade inválida. Crie um método 
// para receber a idade, se a idade for maior ou igual a 18 exibir a mensagem pessoa 
// maior de idade, caso contrário exibir a mensagem pessoa menor de idade.
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sexo, idade) {
        this._nome = nome;
        this._sexo = sexo;
        this._idade = idade;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome === ' ') {
                throw new Error('Nome Inexistente');
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            if (sexo !== 'Masculino' && sexo !== 'Feminino') {
                throw new Error('Opção sexual não aceita');
            }
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            if (idade === 0) {
                throw new Error('Idade Inexistente');
            }
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.verificaIdade = function () {
        if (this._idade >= 18) {
            return ('Pessoa maior de 18 anos');
        }
        else {
            return ('Pessoa menor de 18 anos');
        }
    };
    return Pessoa;
}());
var pessoa = new Pessoa('Gabriel', 'Masculino', 17);
// console.log(pessoa)
try {
    pessoa.sexo = 'Masculino';
    pessoa.idade = 18;
    pessoa.nome = 'Juliana';
    console.log(pessoa.verificaIdade());
    console.log(pessoa);
}
catch (Error) {
    console.log(Error.message);
}
