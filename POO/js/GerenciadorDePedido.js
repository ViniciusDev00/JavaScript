import Pedido from "./Pedido.js";

class GerenciadorDePedido{
    #pedidos = []

    constructor(){
        this.configurar();
    }

    configurar(){
        let adicionarBtn = document.getElementById("adicionarPedidoBtn");
        let removerBtn = document.getElementById("removerPedidoBtn");

        if((adicionarBtn instanceof HTMLButtonElement) && (removerBtn instanceof HTMLButtonElement)){
            adicionarBtn.addEventListener("click", this.adicionarPedido.bind(this));
            removerBtn.addEventListener ("click", this.removerPedido.bind(this));
        }
    }

    adicionarPedido(){
        let nomeInput = document.getElementById("nome");
        let quantidadeInput = document.getElementById("quantidade");
        let precoInput = document.getElementById("preco");

        if((nomeInput instanceof HTMLInputElement) && (quantidadeInput instanceof HTMLInputElement) && (precoInput instanceof HTMLInputElement)){
            let nome = nomeInput.value;
            let quantidade = parseInt(quantidadeInput.value);
            let preco = parseFloat(precoInput.value);

            if(!nome || isNaN(quantidade) || isNaN(preco)){
                alert("Preencha os campos corretamente!")
                return;
            }

            let pedidoExistente = this.#pedidos.find((pedido) => pedido.nome === nome);

            if(pedidoExistente){
                pedidoExistente.quantidade += quantidade;
            }else{
                this.#pedidos.push(new Pedido(nome, quantidade, preco));
            }
            this.atualizar();
            this.limparConteudo();
        }
    }

    removerPedido(){
        let nomeInput = document.getElementById("nome");

        if(nomeInput instanceof HTMLInputElement){
            let nome = nomeInput.value.trim();

            if(nome === ""){
                alert("Preencha o nome do item para ser removido!");
                return;
            }
            let indice = this.#pedidos.findIndex((pedido) => pedido.nome === nome);

            if(indice >= 0){
                this.#pedidos.splice(indice, 1);
                this.atualizar();
            }else{
                alert("Pedido não encontrado!")
            }
            this.limparConteudo();
        }
    }

    atualizar() {
        let listaItens = document.getElementById('listaItens');
        if (listaItens instanceof HTMLUListElement) {
          //estoqueLista.innerHTML = "";
          while (listaItens.firstChild) {
            listaItens.removeChild(listaItens.firstChild);
          }
    
          this.#pedidos.forEach((pedido) => {
            let li = document.createElement('li');
            li.textContent = pedido.toString();
            listaItens.appendChild(li);
          });
        }
      }
    
    limparConteudo() {
        let nomeInput = document.getElementById('nome');
        let quantidadeInput = document.getElementById('quantidade');
        let precoInput = document.getElementById('preco');
    
        //prettier-ignore
        if((nomeInput instanceof HTMLInputElement) && (quantidadeInput instanceof HTMLInputElement)
        && (precoInput instanceof HTMLInputElement)){
            nomeInput.value = '';
            quantidadeInput.value = '';
            precoInput.value = '';
        }
    }

}

document.addEventListener("DOMContentLoaded", () =>{
    new GerenciadorDePedido();
});
