//Encapsulamento -> poder de ocultar informações dentro de subclasses e instâncias
//public, private, protected, readonly


class Cartao{

    //Atributos - Características (sem constructor)
    // titular:string = "Paulo";
    // numero:number = 1111222233334444;
    // ativo:boolean = true;
    // cvv:number = 123;

    //Atributos - Características(com constructor)
    public titular:string; 
    protected numero:number; //Consigo chamar nas classes filhas, mas não consigo alterar an instância do objeto
    private ativo:boolean; // Consigo chamar apenas nessa classe
    readonly cvv:number;

    constructor(_titular:string, _numero:number, _ativo:boolean, _cvv:number){
        this.titular = _titular;
        this.numero = _numero;
        this.ativo = _ativo;
        this.cvv = _cvv;

    }

    //Métodos - Funções - Ações
    Cancelar():void{
        this.ativo = false;
        console.log('Cartão cancelado!');
    }
}

//Instância - Criação do Objeto
let cartao1 = new Cartao('Felipe', 555444666, true, 987);
cartao1.titular = "José";
cartao1.Cancelar();
console.log(`Titular cartao1: ${cartao1.titular}`);



//HERANÇA -> herda propriedades e ações da classe Cartão
class CartaoCredito extends Cartao{ 

    limite: number;

    constructor(_titularSuper:string, _numeroSuper:number, _ativoSuper:boolean, _cvvSuper:number, _limite:number){

        super(_titularSuper, _numeroSuper, _ativoSuper, _cvvSuper); //para chamar os atributos criados na classe pai
        this.limite = _limite;

    }

    ConsultarLimite():number{
        return this.limite;
    }
}

let cartao2 = new CartaoCredito('Paulo', 55554444, true, 123, 5000);
console.log(`Limite do cartão: ${cartao2.ConsultarLimite()}`);


//INTERFACEs - Contrato
interface ICartaoDebito{
    //Saldo - Atributo
    //SubtrairSaldo - Método
    saldo:number;
    SubtrairSaldo(valor:number):number;
}

class CartaoDebito extends Cartao implements ICartaoDebito{
    saldo: number = 8000;
    SubtrairSaldo(valor: number):number {
        this.saldo = this.saldo - valor;
        return this.saldo;
    }
}

let cartao3 = new CartaoDebito("Wellington", 9998888, true, 135);
console.log(`Novo saldo do cartão de débito: ${cartao3.SubtrairSaldo(4000)}`);
