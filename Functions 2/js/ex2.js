const resultado = (resultadoFinal) => {
  let saida = document.getElementById('resultadoFinal');
  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = `O valor com desconto é de ${resultadoFinal}R$ `;
  }
};

const cliqueBotao = (precoInput, descontoInput) => {
  //prettier-ignore
  if(precoInput instanceof HTMLInputElement && descontoInput instanceof HTMLInputElement){
        let preco = Number(precoInput.value);
        let desconto = Number(descontoInput.value);

        if(desconto === 0 || isNaN(desconto)){
            desconto = 10;
        }else{
            desconto = desconto;
        }

        let resultadoFinal = preco - (preco * desconto) /100;


        resultado (resultadoFinal);
    }
};

const configurarSaidaDeResultado = () => {
  let exibirBtn = document.getElementById('exibirBtn');
  let preco = document.getElementById('preco');
  let desconto = document.getElementById('desconto');
  let resultado = document.getElementById('resultadoFinal');

  if (exibirBtn instanceof HTMLButtonElement) {
    exibirBtn.addEventListener('click', () => {
      cliqueBotao(preco, desconto);
    });
  }
};

document.addEventListener('DOMContentLoaded', configurarSaidaDeResultado);
