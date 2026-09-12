export class contaPoupanca{

    numero:number
    nome:string
    saldo:number

    constructor(pNum:number, pNome:string, pSaldo:number){

        this.numero = pNum;
        this.nome = pNome;
        this.saldo = pSaldo;

    }

    // "?" Sgnifica parêmetro opcional.
    pagar(pValor:number, pDesc?:string){

        if(pDesc == undefined){

            this.saldo -= pValor;

        }else {

            this.saldo -= pValor;
            console.log(`Pagando ${pValor} referente a ${pDesc}`);

        }

    }

}// Fim da Clsse