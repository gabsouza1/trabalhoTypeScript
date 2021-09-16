// Crie uma classe Fatura com  os atributos números, descrição, quantidade 
// Comprada e preço. Crie um método valor da Fatura para multiplicar a quantidade 
// comprada pelo preço.

class Fatura {
    private _numeros: number;
    private _descricao: string;
    private _qtdade: number;
    private _preco: number;


    constructor(numeros: number, descricao: string, qtdade: number, preco: number) {
        this._numeros = numeros;
        this._descricao = descricao;
        this._qtdade = qtdade;
        this._preco = preco;
    }


    valorDaFatura(){
        return this._qtdade * this._preco
    }
}


const fatura = new Fatura(1, 'PC gamer', 4, 6350);
console.log(fatura)
console.log(fatura.valorDaFatura())