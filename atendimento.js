// const fila = ["Luiz", "Ana", "Roberta"];
// console.log("Fila inicial: " + fila + "\n");

// let tamanhoFila = fila.length;

// function exibirFila (tamanhoFila) {

//     if (tamanhoFila > 0) {

//         console.log("Fila atual: " + fila);

//     }else {

//         console.log("Fila vazia");

//     }

// }

// for(let i = 0; i < tamanhoFila; i++){

//     exibirFila(tamanhoFila);
//     console.log("Atendimento ao cliente: " + fila[0]);
//     fila.shift();

// }

// exibirFila(tamanhoFila);
// console.log("Fim dos atendimentos");

let fila = [];

function adicionarCliente(){

    let nome = prompt("Digite o nome do cliente: ");

    if(nome){

        let confirma = confirm.t(`Deseja adicionar o cliente ${nome} ?`)

        if(confirma){

            fila.push(nome);

        }

    }else {

        alert("Você não digitou nada!");

    }

}

function atenderCliente(){

        if(fila.length > 0){

            let nome = fila.shift();
            alert(`Cliente ${nome} atendimento!`);

        }else{

            alert("Fila vazia!");

        }

    }
    