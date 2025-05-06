function calcularEscolha() {
  let entradaEscolha = document.getElementById('escolha');
  let entradaNum1 = document.getElementById('num1');
  let entradaNum2 = document.getElementById('num2');

  let mensagem;

  if (
    entradaEscolha instanceof HTMLInputElement &&
    entradaNum1 instanceof HTMLInputElement &&
    entradaNum2 instanceof HTMLInputElement
  ) {
    let escolha = Number(entradaEscolha.value);
    let num1 = Number(entradaNum1.value);
    let num2 = Number(entradaNum2.value);

    switch (escolha) {
      case 1:
        let media = (num1 + num2) / 2;
        mensagem = media;
        break;
      case 2:
        let diferenca = num1 - num2;
        mensagem = diferenca;
        break;
      case 3:
        let produto = num1 * num2;
        mensagem = produto;
        break;
      case 4:
        let divisao = num1 / num2;
        mensagem = divisao;
        break;
      default:
        mensagem = 'Número inválido!';
    }

    let resultado = document.getElementById('resultado');
    if (resultado !== null) {
      resultado.innerText = mensagem;
    }
  }
}
