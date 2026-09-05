export class ContaCorrente{

//Caraceristicas - atributos, não precisa colocar [let] nem ponto e vírgula.

    numero
    nomeCliente
    saldo

    constructor(pNome, pNum, pSaldo = 0){

        this.numero = pNum;
        this.nomeCliente = pNome;
        this.saldo = pSaldo;

    }

    //Ações - Métodos , Funções dentro de uma classe é um Método.
    depositar(pValor){

        this.saldo += pValor;

    }

    sacar(pValor){

        if(pValor <= this.saldo){

            this.saldo -= pValor;

        }else {

            console.log("Saldo insuficiente");

        }

    }

    Pagar(...args){

        //[...args] = Reste paremeter.

        //Apenas 1 paremetro, do tipo inteiro.
        if(args.length == 1 && typeof args[0] === "number"){

            if(args[0] <= this.saldo){

            this.saldo -= args[0];
            console.log(`Pagando R$ ${args[0].toFixed(2)}`);

        }else if(args.length == 2 && typeof args[0] === "number" && typeof args[1] === "string"){

            if(args[0] <= this.saldo){

            this.saldo -= args[0];
            console.log(`Pagando R$ ${args[0].toFixed(2)} referente a ${args[1]}`);

            }else {

            console.log("Parâmetro inválido!")

            }

        }else {

            console.log("Saldo insuficiente!")

        }
    
        }

    }

}