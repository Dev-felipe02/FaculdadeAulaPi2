export class contaPoupanca {
    constructor(pNum, pNome, pSaldo) {
        this.numero = pNum;
        this.nome = pNome;
        this.saldo = pSaldo;
    }
    // "?" Sgnifica parêmetro opcional.
    pagar(pValor, pDesc) {
        if (pDesc == undefined) {
            this.saldo -= pValor;
        }
        else {
            this.saldo -= pValor;
            console.log(`Pagando ${pValor} referente a ${pDesc}`);
        }
    }
} // Fim da Clsse
