document.addEventListener('DOMContentLoaded', function () {
  configurar();
});

function configurar() {
  let btn = document.getElementById('btn');
  btn.addEventListener('click', function () {
    substituirPalavra();
  });
}

function substituirPalavra() {
  let frase = document.getElementById('frase').value;
  let palavra = document.getElementById('palavra').value;
  let novaPalavra = document.getElementById('novaPalavra').value;

  if (frase && palavra && novaPalavra) {
    let resultado = frase.replace(new RegExp(palavra, 'g'), novaPalavra);
    document.getElementById('resultado').innerText = resultado;
  }
}