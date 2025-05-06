function ehPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i < numero; i++) {
      //prettier-ignore
      if ((numero % i) === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  function exibirNumerosPrimos() {
    let numero1Entrada = document.getElementById('numero1');
    let numero2Entrada = document.getElementById('numero2');
  
    //prettier-ignore
    let numero1 = 0, numero2 = 0;
  
    if (numero1Entrada instanceof HTMLInputElement) {
      numero1 = parseInt(numero1Entrada.value);
    }
    if (numero2Entrada instanceof HTMLInputElement) {
      numero2 = parseInt(numero2Entrada.value);
    }
  
    let resultado = '';
  
    if (numero1 <= numero2) {
      for (let i = numero1; i <= numero2; i++) {
        if (ehPrimo(i)) {
          resultado = resultado + i + ' ';
        }
      }
    } else {
      resultado = 'O primeiro número deve ser menor ou igual ao segundo número.';
    }
  
    let saida = document.getElementById('resultado');
    if (saida !== null) {
      saida.textContent = resultado;
    }
  }