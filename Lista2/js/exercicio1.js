function verificar() {
  let entradaNum = document.getElementById('num');

  if (entradaNum instanceof HTMLInputElement) {
    let numero = Number(entradaNum.value);
    let mensagem;

    if (numero > 0) {
      mensagem = 'O número é ' + numero + ' é positivo';
    } else if (numero < 0) {
      mensagem = 'O número é ' + numero + ' é negativo';
    } else if (numero == 0) {
      mensagem = 'O número é ' + numero;
    } else {
      mensagem = 'Valor inválido';
    }
    let resultado = document.getElementById('resultado');
    if (resultado !== null) {
      resultado.innerText = mensagem;
    }
  }
}
