function configurar() {
    let botaoEnviar = document.getElementById('btnEnviar');
    let idadeInput = document.getElementById('idade');

    //prettier-ignore
    if((botaoEnviar instanceof HTMLButtonElement) && (idadeInput
    instanceof HTMLInputElement)){
        botaoEnviar.addEventListener("click", () => {
            let idade = parseInt(idadeInput.value);
            validar(idade);
        });
    }
    
}
    
function exibirConteudo(idade) {
    let saida = document.getElementById('saida');

    if (saida instanceof HTMLParagraphElement) {
    saida.textContent = `Idade válida! Você é maior de idade. ${idade} anos.`;
    }
    
}

function exibirErro(mensagem) {
    let saida = document.getElementById('saida');
    if (saida instanceof HTMLParagraphElement)
    { 
        saida.textContent = 'Erro: ' + mensagem; }
    }

function validar(idade) {
    try {
        if (isNaN(idade) || idade <= 0) {
            throw new Error('Digite uma idade válida.'); 
    }
        if (idade < 18) {
            throw new Error('Menor de Idade'); 
    }

        exibirConteudo(idade);
    }
    catch (error) {
        exibirErro(error.message);
    } 
}
    
document.addEventListener('DOMContentLoaded', configurar);