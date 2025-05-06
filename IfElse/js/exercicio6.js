function exibirPalindromo() {
  let entradaTexto = document.getElementById('palindromo');
  let mensagem;

  if (entradaTexto instanceof HTMLInputElement) {
    let texto = entradaTexto.value.trim();
    let textoReverso = texto.split('').reverse().join('');

    if (texto === textoReverso) {
      mensagem = 'A palavra é um palíndromo';
    } else {
      mensagem = 'A palavra não é um palíndromo';
    }

    let resultado = document.getElementById('resultado');
    if (resultado != null) {
      resultado.innerText = mensagem;
    }
  }
}
