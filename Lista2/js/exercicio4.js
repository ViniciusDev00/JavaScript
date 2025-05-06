function exibirTipo() {
  let entradaLado1 = document.getElementById('lado1');
  let entradaLado2 = document.getElementById('lado2');
  let entradaBase = document.getElementById('base');

  let mensagem;

  //prettier-ignore
  if (entradaLado1 instanceof HTMLInputElement &&
    entradaLado2 instanceof HTMLInputElement &&
    entradaBase instanceof HTMLInputElement) {
        let lado1 = Number(entradaLado1.value);
        let lado2 = Number(entradaLado2.value);
        let base = Number(entradaBase.value);


        if((lado1 == lado2) && (lado2 == base)){
            mensagem = "Triângulo Equilátero";
        }
        else if((lado1 == lado2) && (lado2 !== base) || (lado2 == base) && (lado1 !== base) || (lado1 == base) && (lado2 !== base)){
            mensagem = "Triângulo Isósceles";
        }
        else if((lado1 !== lado2) && (lado2 !== base)){
            mensagem = "Triângulo Escaleno";
        }else{
            mensagem = "Valor inválido";
        }

        let resultado = document.getElementById('resultado');
        if (resultado !== null) {
            resultado.innerText = mensagem;
        }
  }
}
