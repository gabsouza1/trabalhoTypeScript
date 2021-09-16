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

class ImpostoRenda {
    public _nome: string;
    public _rendaAnual: number

    constructor(nome: string, rendaAnual: number){
        this._nome = nome;
        this._rendaAnual = rendaAnual;
    }

    get nome (){
        return this._nome;
    }

    get rendaAnual (){
        return this._rendaAnual
    }

    set nome(nome: string){
        if(nome === ' '){
            throw new Error('Nome Invalido')
        }
        this._nome = nome
    }

    set rendaAnual(rendaAnual: number){
        if(rendaAnual === 0){
            throw new Error('Renda Anual Invalida')
        }
    }
}


class PessoaFisica extends ImpostoRenda{
        public _gastoSaude: number;

        constructor(gastoSaude: number, nome: string, rendaAnual: number){
        super(nome, rendaAnual);
        this._gastoSaude = gastoSaude
        }

        get gastoSaude(){
            return this._gastoSaude
        }


        pessoaFisica(rendaAnual: number, gastoSaude: number){
            if(rendaAnual < 20000){
                return rendaAnual * 1.15
            } else if (rendaAnual < 20000 && gastoSaude > 0){
                return (rendaAnual * 0.15) - (gastoSaude * 0.5)
            } else if(rendaAnual > 2000 &&  gastoSaude > 0){
                return (rendaAnual * 0.15) - (gastoSaude * 0.5)
        }
}

}


class PessoaJuridica extends ImpostoRenda{
        public _numDeFuncionarios: number


        constructor(nome:string, rendaAnual: number, numDeFuncionarios: number){
            super(nome, rendaAnual)
            this._numDeFuncionarios = numDeFuncionarios
        }

        get numDeFuncionarios(){
            return this._numDeFuncionarios
        }

        set numDeFuncionarios(numDeFuncionarios: number){
            if(numDeFuncionarios === 0){
                throw new Error("Quantidade de funcionarios invalidos")
            }
            this._numDeFuncionarios = numDeFuncionarios
        }

        pessoaJuridica(rendaAnual: number, numDeFuncionarios: number){
            if(numDeFuncionarios < 10){
                return rendaAnual * 0.16
            } else {
                return rendaAnual * 0.14
            }
        }
}

const imposto = new ImpostoRenda('Gabriel', 200000)
console.log(imposto)
try {
    imposto.nome = ' '
    imposto.rendaAnual = 0
    console.log(imposto)
} catch(err:any) {
    console.log(err.message)
}


const pessoajuridica = new PessoaJuridica('Gabriel', 2000000, 3)
console.log(pessoajuridica)
console.log(pessoajuridica.pessoaJuridica(100000, 7))
try {
    pessoajuridica.numDeFuncionarios = 0
    console.log(pessoajuridica)
} catch (err:any) {
    console.log(err.message)
}