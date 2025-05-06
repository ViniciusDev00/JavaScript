const mensagem = (resultado) => {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = `O número é ${resultado}`;
  }
};

const cliqueBtn = (numeroInput) => {
  if (numeroInput instanceof HTMLInputElement) {
    let numero = Number(numeroInput.value);
    let resultado;
    if (isNaN(numero)) {
      resultado = 'Número inválido';
    }
    if (numero % 2 === 0) {
      resultado = 'Par';
    } else {
      resultado = 'Ímpar';
    }

    mensagem(resultado);
  }
};

const configurarSaida = () => {
  let exibirBtn = document.getElementById('exibirBtn');
  let numero = document.getElementById('numero');
  let resultado = document.getElementById('resultado');

  if (exibirBtn instanceof HTMLButtonElement) {
    exibirBtn.addEventListener('click', () => {
      cliqueBtn(numero);
    });
  }
};

document.addEventListener('DOMContentLoaded', configurarSaida);
