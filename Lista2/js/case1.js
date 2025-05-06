function obterEstacao() {
  let entradaNumero = document.getElementById('numero');
  let mensagem;
  if (entradaNumero instanceof HTMLInputElement) {
    let numero = Number(entradaNumero.value);

    switch (numero) {
      case 1:
        mensagem =
          'Primavera : É a estação das flores, com temperaturas amenas e dias e noites de igual duração.';
        break;
      case 2:
        mensagem =
          'Verão : É um período de sol intenso, com chuvas que ocorrem após longos dias de calor.';
        break;
      case 3:
        mensagem =
          'Outono : É a estação das frutas, com temperaturas baixas e o anúncio do fim do verão.';
        break;
      case 4:
        mensagem =
          'Inverno : É a estação da chuva, neve e geada, com temperaturas baixas que podem levar à hipotermia.';
        break;
      default:
        mensagem = 'Número Inválido';
    }

    let resultado = document.getElementById('resultado');
    if (resultado != null) {
      resultado.innerText = mensagem;
    }
  }
}
