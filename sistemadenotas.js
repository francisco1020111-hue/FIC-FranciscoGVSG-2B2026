function verificarNota() {
  let nota = Number(document.getElementById("nota").value);
  let resultado = document.getElementById("resultado");

  if (isNaN(nota)) {
    resultado.innerText = "Digite uma nota válida!";
    return;
  }

  switch (true) {
    case nota >= 6:
      resultado.innerText = "Aprovado";
      break;

    case nota > 1 && nota < 6:
      resultado.innerText = "Recuperação";
      break;

    case nota <= 1:
      resultado.innerText = "Reprovado";
      break;

    default:
      resultado.innerText = "Erro";
  }
}
