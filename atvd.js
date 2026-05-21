let listaPessoas = "Ana-15,Bruno-22,Carlos-30,Daniela-18,Elisa-25";
let pessoas = listaPessoas.split(",");
let listaFormatada = [];

pessoas.push({nome: nome, idade: idade});

let item = document.createElement("li");
item.innerText = nome + " - " + idade + "anos";
document.getElementById("lista").appendChild(item);

document.getElementById("nome").value = "";
document.getElementById("idade").value = "";


pessoas.sort(function(a, b){
    return a.idade - b.idade;
    });

    let total = listaPessoas.length;
    let soma = 0;
    let maiores = 0;

    for (let i = 0; i < pessoas.length; i++) {
        soma += pessoas[i].idade;

        if (pessoas[i].idade >= 18) {
            maiores++;
        }
    }

    let media = soma / total;

    document.getElementById("resultado").innerText =
        "Total: " + total +
        " | Média: " + media.toFixed(1) +
        " | Maiores de 18 anos: " + maiores;


console.log(listaFormatada);