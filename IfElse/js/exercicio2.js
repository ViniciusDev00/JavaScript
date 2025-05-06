function mostrar() {
  let entradaMes = document.getElementById('mes');
  let mensagem;

  if (entradaMes instanceof HTMLInputElement) {
    let mes = entradaMes.value;

    if (mes == 'janeiro') {
      mensagem = 'Mês 1';
    } else if (mes == 'fevereiro') {
      mensagem = 'Mês 2';
    } else if (mes == 'março') {
      mensagem = 'Mês 3';
    } else if (mes == 'abril') {
      mensagem = 'Mês 4';
    } else if (mes == 'maio') {
      mensagem = 'Mês 5';
    } else if (mes == 'junho') {
      mensagem = 'Mês 6';
    } else if (mes == 'julho') {
      mensagem = 'Mês 7';
    } else if (mes == 'agosto') {
      mensagem = 'Mês 8';
    } else if (mes == 'setembro') {
      mensagem = 'Mês 9';
    } else if (mes == 'outubro') {
      mensagem = 'Mês 10';
    } else if (mes == 'novembro') {
      mensagem = 'Mês 11';
    } else if (mes == 'dezembro') {
      mensagem = 'Mês 12';
    } else {
      mensagem = 'Texto inválido';
    }
    let resultado = document.getElementById('resultado');
    if (resultado !== null) {
      resultado.innerText = mensagem;
    }
  }
}
