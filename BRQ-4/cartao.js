"use strict";
//Encapsulamento -> poder de ocultar informações dentro de subclasses e instâncias
//public, private, protected, readonly
class Cartao {
    constructor(_titular, _numero, _ativo, _cvv) {
        this.titular = _titular;
        this.numero = _numero;
        this.ativo = _ativo;
        this.cvv = _cvv;
    }
    //Métodos - Funções - Ações
    Cancelar() {
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
class CartaoCredito extends Cartao {
    constructor(_titularSuper, _numeroSuper, _ativoSuper, _cvvSuper, _limite) {
        super(_titularSuper, _numeroSuper, _ativoSuper, _cvvSuper); //para chamar os atributos criados na classe pai
        this.limite = _limite;
    }
    ConsultarLimite() {
        return this.limite;
    }
}
let cartao2 = new CartaoCredito('Paulo', 55554444, true, 123, 5000);
console.log(`Limite do cartão: ${cartao2.ConsultarLimite()}`);
class CartaoDebito extends Cartao {
    constructor() {
        super(...arguments);
        this.saldo = 8000;
    }
    SubtrairSaldo(valor) {
        this.saldo = this.saldo - valor;
        return this.saldo;
    }
}
let cartao3 = new CartaoDebito("Wellington", 9998888, true, 135);
console.log(`Novo saldo do cartão de débito: ${cartao3.SubtrairSaldo(4000)}`);
