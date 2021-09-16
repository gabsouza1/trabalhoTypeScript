// Crie uma classe Pessoa com os atributos nome, sexo e idade. Crie os getters e 
// setters. No setters valide se o nome for em branco retorne uma mensagem de nome 
// inválido. Se o sexo for diferente de Masculino ou Feminino retorne uma mensagem 
// inválida. Se a idade for 0 retorne uma mensagem de idade inválida. Crie um método 
// para receber a idade, se a idade for maior ou igual a 18 exibir a mensagem pessoa 
// maior de idade, caso contrário exibir a mensagem pessoa menor de idade.

class Pessoa{
    private _nome: string;
    private _sexo: string;
    private _idade: number
    
    constructor(nome: string, sexo: string, idade: number) {
        this._nome = nome;
        this._sexo = sexo;
        this._idade = idade;
    }

    get nome(){
        return this._nome;
    }

    get sexo(){
        return this._sexo;
    }

    get idade(){
        return this._idade;
    }

    set nome(nome: string){
        if (nome === ' '){
            throw new Error('Nome Inexistente')
        }
        this._nome = nome;
    }

    set sexo(sexo: string){
        if (sexo !== 'Masculino' && sexo !== 'Feminino'){
            throw new Error('Opção sexual não aceita')
        }
        this._sexo = sexo;
    }

    set idade(idade: number){
        if (idade === 0 ){
            throw new Error('Idade Inexistente')
        }
        this._idade = idade
    }


    verificaIdade(){
        if (this._idade >= 18){
            return ('Pessoa maior de 18 anos')
        } else {
            return ('Pessoa menor de 18 anos')
        }
    }
}

const pessoa = new Pessoa('Gabriel', 'Masculino', 17);
// console.log(pessoa)
try{
    pessoa.sexo = 'Masculino'
    pessoa.idade = 18
    pessoa.nome = 'Juliana'
    console.log(pessoa.verificaIdade())
    console.log(pessoa)
}catch (Error:any){
    console.log(Error.message)
}

