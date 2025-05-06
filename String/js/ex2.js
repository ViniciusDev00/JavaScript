function palavras() {
  LetraMaiuscula();
}
document.addEventListener('DOMContentLoaded', function () {
  configurar();
});

function configurar() {
  let btn = document.getElementById('btn');
  btn.addEventListener('click', function () {
    palavras();
  });
}

function LetraMaiuscula() {
  let frase = document.getElementById('frase').value;
  let palavras = frase.split(' ');
  let resultado = palavras.map(palavras => palavras.charAt(0).toUpperCase() + palavras.slice(1)).join(' ');
  document.getElementById('resultado').innerText = resultado;
}




