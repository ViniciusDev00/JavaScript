function exibirBissexto() {
  let entradaAno = document.getElementById('ano');
  let mensagem;

  if (entradaAno instanceof HTMLInputElement) {
    let ano = Number(entradaAno.value);

    if (ano % 400 == 0) {
      mensagem = 'O ano é Bissexto';
    } else if (ano % 4 == 0 && ano % 100 != 0) {
      mensagem = 'O ano é Bissexto';
    } else {
      mensagem = 'O ano não é Bissexto';
    }

    let resultado = document.getElementById('resultado');
    if (resultado !== null) {
      resultado.innerText = mensagem;
    }
  }
}
