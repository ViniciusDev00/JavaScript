const saudacao = (nome, mensagem) => {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = `Olá ${nome}! ${mensagem}`; //mesma mensagem, mas com craze
    //saida.textContent = 'Olá' + nome + ' ' + mensagem; //mesma mensagem, mas com aspas
  }
};

const cliqueNoBotao = (nomeInput, mensagemInput) => {
  //prettier-ignore
  if(nomeInput instanceof HTMLInputElement && mensagemInput instanceof HTMLInputElement){
        let nome = nomeInput.value;
        let mensagem = mensagemInput.value;

        nome = nome  === "" ? "Visitante" : nome;
        /*if(nome === ""){
            nome = "Visitante";
        }else{
            nome = nome;
        }*/
        if(mensagem === ""){
            mensagem = "Bem-vindo!"
        }else{
            mensagem = mensagem;
        }

        saudacao(nome, mensagem);
    }
};

const configurarEventoDeSaudacao = () => {
  let exibirBtn = document.getElementById('exibirBtn');
  let nome = document.getElementById('nome');
  let mensagem = document.getElementById('mensagem');

  if (exibirBtn instanceof HTMLButtonElement) {
    exibirBtn.addEventListener('click', () => {
      cliqueNoBotao(nome, mensagem);
    });
  }
};

document.addEventListener('DOMContentLoaded', configurarEventoDeSaudacao);
