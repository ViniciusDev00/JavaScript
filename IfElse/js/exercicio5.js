function exibirMedia() {
  let entradaNota = document.getElementById('nota');

  let mensagem;

  if (entradaNota instanceof HTMLInputElement) {
    let nota = Number(entradaNota.value);

    if (nota >= 5) {
      mensagem = 'Aprovado';
    } else if (nota < 5 && nota >= 3) {
      mensagem = 'Recuperação';
    } else if (nota > 3) {
      mensagem = 'Reprovado';
    } else {
      mensagem = 'Valor inválido';
    }

    let resultado = document.getElementById('resultado');
    if (resultado !== null) {
      resultado.innerText = mensagem;
    }
  }
}
