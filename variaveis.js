let nome = "Cezar"; // Escopo global ou de função.
let idade = 18;
const pais = "Brasil"; // valor constante. Impede reatribuição.

if (true){

    let idade = 20;
    let nome = "Ana";
    console.log(`nome: ${nome}, idade: ${idade}`);

}

console.log(idade);