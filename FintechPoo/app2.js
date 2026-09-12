import { contaPoupanca } from "./conta.js";

const conta1 = new contaPoupanca(1, "Zé da Manga", 1000);

conta1.pagar(50);
conta1.pagar(150, "Spotify");

console.log(conta1.saldo);
