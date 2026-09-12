export class Falcao {

    constructor(pNom, pRaca, pCor, pPeso) {

        this.nome = pNom;
        this.raca = pRaca;
        this.cor = pCor;
        this.peso = pPeso;
        this.voando = false;

    }

    voar(pRaca, pNom) {

        console.log(pRaca + " o " + pNom + " está voando e pode caçar!");
        this.voando = true;

    }

    cacar(pRaca, pNom) {

        if (this.voando) {
            console.log(pRaca + " o " + pNom + " fez uma caça!");
        }
        else {
            console.log(pRaca + " o " + pNom + " só pode caçar quando está voando!");
        }

    }

}
