// Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e 
// quantidade de dias. Crie os getters e setters. No setters crie validações para não 
// aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor 
// zero. Crie um método passeio para receber a quantidade de dias e o valor da 
// locação. O sistema calcule o total que será a multiplicação da quantidade de dias 
// pelo valor da locação.

class Veiculos {
    public _modelo: string;
    public _marca: string;
    public _ano: number;
    public _valorLocacao: number;
    public _qtdeDias: number;

    constructor(modelo: string, marca: string, ano: number, valorLocacao: number, qtdeDias: number) {
        this._modelo = modelo;
        this._marca = marca;
        this._ano = ano;
        this._valorLocacao = valorLocacao;
        this._qtdeDias = qtdeDias;
    }

    get modelo(){
        return this._modelo;
    }

    get marca(){
        return this._marca;
    }

    get ano(){
        return this._ano;
    }

    get valorLocacao(){
        return this._valorLocacao;
    }

    get qtdeDias(){
        return this._qtdeDias;
    }

    set modelo(modelo: string){
        if(modelo === ' '){
            throw new Error('Modelo Inexistente')
        }
        this._modelo = modelo
    }

    set marca(marca: string){
        if(marca === ' '){
            throw new Error('Marca Inexistente')
        }
        this._marca = marca
    }

    set valorLocacao(valorLocacao: number){
        if(valorLocacao === 0){
            throw new Error('Valor Inexistente')
        }
        this._valorLocacao = valorLocacao
    }

    set ano(ano: number){
        if(ano === 0){
            throw new Error('Ano Inexistente')
        }
        this._ano = ano
    }

    set qtdeDias(qtdeDias: number){
        if(qtdeDias === 0){
            throw new Error('Quantidades de dias inexistentes')
        }
        this._qtdeDias = qtdeDias
    }


    passeio(){
        return this._qtdeDias * this._valorLocacao
    }
}


const veiculos = new Veiculos('Gol', 'Volkswagen', 2021, 250, 13 )
try {
    veiculos.modelo = 'CLA 45'
    veiculos.marca = 'Mercedez'
    veiculos.ano = 2020
    veiculos.valorLocacao = 1000
    veiculos.qtdeDias = 5
    console.log(veiculos.passeio())
    console.log(veiculos)
} catch (error:any) {
    console.log(error.message)
}