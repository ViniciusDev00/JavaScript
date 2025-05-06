function configurar() {
    let botaoSolicitar = document.getElementById('btnSolicitar');
    let nomeInput = document.getElementById('nome');
    let idadeInput = document.getElementById('idade');
    let valorInput = document.getElementById('valor');

    //prettier-ignore
    if((botaoSolicitar instanceof HTMLButtonElement) && (idadeInput
    instanceof HTMLInputElement) && (nomeInput instanceof HTMLInputElement) && (valorInput instanceof HTMLInputElement)){
        botaoSolicitar.addEventListener("click", () => {
            let nome = nomeInput.value;
            let idade = parseInt(idadeInput.value);
            let valor = parseFloat(valorInput.value);
            validar(nome, idade, valor);
        });
    }
    
}
    
function exibirConteudo(nome, idade, valor) {
    let saida = document.getElementById('saida');

    if (saida instanceof HTMLParagraphElement) {
        saida.textContent = `Parabéns ${nome}, de ${idade}, seu empréstimo no valor de R$${valor} foi solicitado!`;
    }
    
}

function exibirErro(mensagem) {
    let saida = document.getElementById('saida');
    if (saida instanceof HTMLParagraphElement)
    { 
        saida.textContent = 'Erro: ' + mensagem; }
    }

function validar(nome, idade, valor) {
    try {
        if (isNaN(idade) || idade <= 0 ) {
            throw new Error('Digite um número válida.'); 
        }
        if (idade < 18 ) {
            throw new Error('Não é possível solicitar o empréstimo! Menor de 18 anos.'); 
        }
        if(idade > 70){
            throw new Error('Não é possível solicitar o empréstimo! Maior de 70 anos.'); 
        }
        if(valor > 30000){
            throw new Error('O valor solicitado é maior do que R$30000'); 
        }
        if(valor < 100){
            throw new Error('O valor solicitado é menor do que R$100!');
        }

        exibirConteudo(nome, idade, valor);
    }
    catch (error) {
        exibirErro(error.message);
    } 
}
    
document.addEventListener('DOMContentLoaded', configurar);