let listaPessoas = "Ana-15,Bruno-22,Carlos-30,Daniela-18,Elisa-25";
let pessoas = listaPessoas.split(",");
let listaFormatada = [];

for (let i = 0; i < pessoas.length; i++) {
    let dados = pessoas[i].split("-");
    
    let pessoa = {
        nome: dados[0],
        idade: Number(dados[1])
    };

    listaFormatada.push(pessoa);
}

console.log(listaFormatada);