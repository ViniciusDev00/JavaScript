function exibirNumero() {
  let numero = document.getElementById('numeroInput');

  if (numero instanceof HTMLInputElement) {
    let numAtual = Number(numero.value);
    let antecessor = numAtual - 1;
    let sucessor = numAtual + 1;
    //prettier-ignore
    document.body.insertAdjacentHTML('beforeend','Os números são: ' + antecessor + ' e ' + ' ' + sucessor);
  }
}
