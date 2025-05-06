function exibirConteudo(resultado) {
  console.log('O resultado é: ' + resultado);
}

const soma = function (num1, num2, exibirConteudo) {
  let res;
  res = num1 + num2;
  exibirConteudo(res);
}

console.log(soma(1, 2));
