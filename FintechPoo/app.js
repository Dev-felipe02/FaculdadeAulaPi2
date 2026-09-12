import { ContaCorrente } from "./contaCorrente.js";

let conta1 = new ContaCorrente("Felipe", 1, 3500);
console.log(`Conta de ${conta1.nomeCliente} \nSaldo: ${conta1.saldo}`);

let conta2 = new ContaCorrente("Larissa", 2, 5000);
console.log(`Conta de ${conta2.nomeCliente} \nSaldo: ${conta2.saldo}`);

console.log("\n")

conta2.Pagar(1500, "Internet");
console.log(conta2.saldo);
