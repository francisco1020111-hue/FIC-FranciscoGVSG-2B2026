function MinhaIdade() {

    let opcao =
        document.getElementById("opcao").value;

    switch (opcao) {

        case "1":

        document.getElementById("resultadoidade").innerText =
        "Menor de idade, Negado.";


        break;

        case "2":

        document.getElementById("resultadoidade").innerText =
        "Concluído, o candidato pode votar.";

        break;

        case "3":

        document.getElementById("resultadoidade").innerText =
        "Concluído, o candidato pode votar.";

        break;

        case "4":

        document.getElementById("resultadoidade").innerText =
        "Concluído, o candidato pode votar.";

        break;
    }
}

function MeuVoto() {

    let voto =
        document.getElementById("voto").value;

        switch (voto) {

            case "5":

            document.getElementById("resultadoidade").innerText =

            alert("Vote no 80!")
        }
}