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


class Vendedores {
    private _nome: string;
    private _salario: number;
    private _valorVenda: number

    constructor(nome: string, salario: number, valorVenda: number){
        this._nome = nome;
        this._salario = salario;
        this._valorVenda = valorVenda;
    }

    get nome(){
        return this._nome;
    }

    get salario(){
        return this._salario;
    }

    get valorVenda(){
        return this._valorVenda;
    }

    set nome (nome: string){
        if (nome === ' '){
            throw new Error('Nome Invalido')
        }
        this._nome = nome
    }

    set salario (salario: number){
        if (salario === 0){
            throw new Error('Salario Invalido')
        }
        this._salario = salario
    }

    set valorVenda(valorVenda: number){
        if(valorVenda === 0){
            throw new Error('Valor Venda Invalido')
        }
        this._valorVenda = valorVenda
    }

    descontoSalario(salario: number){
        return  salario * 0.08
    }
}


class VendedorPessoaFisica extends Vendedores{
    public _regiao: string;

    constructor(nome: string, salario: number, valorVenda: number, regiao: string){
        super(nome, salario, valorVenda)
        this._regiao = regiao
    }

    get regiao(){
        return this._regiao
    }

    set regiao (regiao: string){
        verificaRegiao(regiao)
        this._regiao = regiao
    }

    comissao(regiao: string, valorVenda: number, salario: number){
        regiao = regiao.toLowerCase()
        verificaRegiao
        let comissao = 0
        if(regiao === 'sul'){
            comissao = 0.10
            salario += comissao * valorVenda
        } else if(regiao === 'nordeste'){
            comissao = 0.17
            salario += comissao * valorVenda
            return salario
        } else if(regiao === 'norte'){
            comissao = 0.15
            salario += comissao * valorVenda
            return salario
        } else if(regiao === 'centro oeste'){
            comissao = 0.14
            salario += comissao * valorVenda
            return salario
        } else if(regiao === 'sudeste'){
            comissao = 0.12
            salario += comissao * valorVenda
            return salario
        }
    }
}

    class VendedorPessoaJuridica extends Vendedores{
        private _nomeEmpresa: string;
        private _totalEmpregados: number;

        constructor(nomeEmpresa: string, totalEmpregados: number, nome: string, salario: number, valorVenda: number){
            super(nome, salario, valorVenda)
                this._nomeEmpresa = nomeEmpresa
                this._totalEmpregados = totalEmpregados
            
        }

        get nomeEmpresa(){
            return this._nomeEmpresa
        }

        get totalEmpregados(){
            return this._totalEmpregados
        }

        set nomeEmpresa(nomeEmpresa: string){
            if (nomeEmpresa === ' '){
                throw new Error('Nome invalido')
            }
            this._nomeEmpresa = nomeEmpresa
        }

        set totalEmpregados(totalEmpregados: number){
            if (totalEmpregados = 0){
                throw new Error('Total de empregados invalid')
            }
            this._totalEmpregados = totalEmpregados
        }


        comissaoVendaJuridica(valorVenda: number, comissao: number){
            if(valorVenda < 5000){
                valorVenda * 1.02
                return comissao
            } else if (valorVenda >= 5000 && valorVenda < 10000){
                valorVenda * 1.04
                return comissao
            } else {
                valorVenda * 1.6
                return comissao
            }
        }

        bonusFuncionario(totalEmpregados: number, bonus: number, salario: number){
            if(totalEmpregados < 100){
                return bonus + salario + 200
            } else {
                return bonus + salario + 300
            }
        }


        
}

    function verificaRegiao(regiao: string){
        regiao = regiao.toLowerCase()
        const regioes = ['nordeste', 'sul', 'centro oeste', 'sudeste', 'norte']

        const verificaRegioes = regioes.filter((regioes) => regioes === regiao)
        if(!verificaRegioes.length){
            throw new Error('Região Invalida.')
        }
    }


const vendedores = new Vendedores('Gabriel', 5000, 350);
try{
    vendedores.nome = 'Helder'
    vendedores.salario = 10000
    vendedores.valorVenda = 5000
    console.log(vendedores.descontoSalario(10000))
    console.log(vendedores)
}catch(err:any){
    console.log(err.message)
}


const vendedorFisica = new VendedorPessoaFisica('Gabriel', 5000, 30000, 'Sudeste')
try{
    vendedorFisica.nome = 'Felipe'
    vendedorFisica.salario = 5000
    vendedorFisica.valorVenda = 17000
    vendedorFisica.regiao = 'Sudeste'
    vendedorFisica.comissao('Centro oeste', 15000, 3000)
    console.log(vendedorFisica)
}catch(err:any){
    console.log(err.message)
}

const vendedorJuridico = new VendedorPessoaJuridica('Tesla', 5000, 'Gabriel', 7500, 13090)
try{
    vendedorJuridico.nomeEmpresa = 'Ferrari'
    vendedorJuridico.totalEmpregados = 7500
    vendedorJuridico.nome = 'Enrico'
    vendedorJuridico.salario = 18000
    vendedorJuridico.valorVenda = 32000
    vendedorJuridico.comissaoVendaJuridica(10000, 0.5)
    vendedorJuridico.bonusFuncionario(5000, 0.3, 15000)
    console.log(vendedorJuridico)
}catch(err:any){
    console.log(err.message)
}
