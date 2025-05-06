let numeros = [];

function acrescentar(numeroInputStr) {
  numeros = numeroInputStr.split(',');
  console.log(numeros);
}

function validarNumeros(numeros) {
  try {
    if (numeros.length === 0) {
      alert('Adicione ao menos um número antes de exibir o resultado.');
      return;
    }

    let menor = Math.min(...numeros);  
    let maior = Math.max(...numeros);  

    return { menor, maior };  
  } catch (error) {
    console.error("Erro ao exibir números:", error);
    return 0;
  }
}

function exibirResultado(saida, vetorNumeros) {
    console.log("dentro da exibir: "+saida)
    console.log("dentro da exibir: "+vetorNumeros)
    let resultado = document.getElementById("resultado");
    let numerosAdicionados = document.getElementById("numerosAdicionados");

    if((resultado instanceof HTMLParagraphElement) && (numerosAdicionados instanceof HTMLParagraphElement)){
        numerosAdicionados.textContent =  vetorNumeros;
        resultado.textContent = `o menor é: ${saida.menor} e o maior é: ${saida.maior}`;

    }
 
}

function configurar() {
  try {
    let numeroInput = document.getElementById('numero');
    let adicionarNumeroBtn = document.getElementById('adicionarNumero');
    let exibirBtn = document.getElementById('exibir');
    //let limparConteudoBtn = document.getElementById('limparConteudo');
   console.log("fora do if");
    if ((numeroInput instanceof HTMLInputElement) && (adicionarNumeroBtn instanceof HTMLButtonElement)
        && (exibirBtn instanceof HTMLButtonElement)) {
        console.log("dentro do if");
      adicionarNumeroBtn.addEventListener('click', () => {
        acrescentar(numeroInput.value);
        console.log("acrescentou ");
      });

     exibirBtn.addEventListener('click', () => {
        let saida = validarNumeros(numeros);
        console.log("dentro do botao exibir: "+saida)
        exibirResultado(saida, numeros);  // Corrigindo para chamar a função correta
      });  
    }
  } catch (error) {
    console.error("Erro ao configurar os botões e inputs:", error);
  }
}

document.addEventListener('DOMContentLoaded', configurar);
