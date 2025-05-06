
class GeradorNumeros {
    constructor() {
        this.numeros = [];
    }

    acrescentar(numeroInputStr) {
        this.numeros = numeroInputStr.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
        console.log(this.numeros);
    }

    validarNumeros() {
        try {
            if (this.numeros.length === 0) {
                alert('Adicione ao menos um número antes de exibir o resultado.');
                return;
            }

            let menor = Math.min(...this.numeros);  
            let maior = Math.max(...this.numeros);  

            return { menor, maior };  
        } catch (error) {
            console.error("Erro ao exibir números:", error);
            return 0;
        }
    }

    exibirResultado(saida) {
        let resultado = document.getElementById("resultado");
        let numerosAdicionados = document.getElementById("numerosAdicionados");

        if ((resultado instanceof HTMLParagraphElement) && (numerosAdicionados instanceof HTMLParagraphElement)) {
            numerosAdicionados.textContent = `Números adicionados: ${this.numeros.join(', ')}`;
            resultado.textContent = `O menor é: ${saida.menor} e o maior é: ${saida.maior}`;
        }
    }

    configurar() {
        try {
            let numeroInput = document.getElementById('numero');
            let adicionarNumeroBtn = document.getElementById('adicionarNumero');
            let exibirBtn = document.getElementById('exibir');

            if ((numeroInput instanceof HTMLInputElement) && (adicionarNumeroBtn instanceof HTMLButtonElement)
                && (exibirBtn instanceof HTMLButtonElement)) {
                adicionarNumeroBtn.addEventListener('click', () => {
                    this.acrescentar(numeroInput.value);
                    console.log("Números acrescentados");
                });

                exibirBtn.addEventListener('click', () => {
                    let saida = this.validarNumeros();
                    if (saida !== 0) {
                        this.exibirResultado(saida); 
                    }
                });
            }
        } catch (error) {
            console.error("Erro ao configurar os botões e inputs:", error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const gerador = new GeradorNumeros();
    gerador.configurar();
        });