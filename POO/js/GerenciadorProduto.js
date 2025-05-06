import Produto from './Produto.js';

class GerenciadorDeProdutos {
  #produtos = [];

  configurar() {
    try {
      let adicionarBtn = document.getElementById('adicionarBtn');
      let removerBtn = document.getElementById('removerBtn');

      if ((adicionarBtn instanceof HTMLButtonElement) && (removerBtn instanceof HTMLButtonElement)) {
        adicionarBtn.addEventListener('click', this.adicionarProduto.bind(this));
        removerBtn.addEventListener('click', this.removerProduto.bind(this));
      }
    } catch (error) {
      console.error("Erro ao configurar os botões:", error);
    }
  }

  adicionarProduto() {
    try {
      let nomeInput = document.getElementById('nome');
      let quantidadeInput = document.getElementById('quantidade');
      let precoInput = document.getElementById('preco');

      if ((nomeInput instanceof HTMLInputElement) && (quantidadeInput instanceof HTMLInputElement) && (precoInput instanceof HTMLInputElement)) {
        let nome = nomeInput.value;
        let quantidade = parseInt(quantidadeInput.value);
        let preco = parseFloat(precoInput.value);

        if ((!nome) || isNaN(quantidade) || isNaN(preco)) {
          alert("Preencha os campos corretamente !");
          return;
        }

        // Busca o primeiro item no vetor que contém o nome procurado
        let produtoExistente = this.#produtos.find((produto) => produto.nome === nome);

        if (produtoExistente) {
          produtoExistente.quantidade += quantidade; // Atualiza a quantidade
        } else {
          this.#produtos.push(new Produto(nome, quantidade, preco)); // Adiciona um novo produto
        }

        this.atualizar();
        this.limparConteudo();
      }
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  }

  atualizar() {
    try {
      let estoqueLista = document.getElementById('estoqueLista');
      if (estoqueLista instanceof HTMLUListElement) {
        while (estoqueLista.firstChild) {
          estoqueLista.removeChild(estoqueLista.firstChild); // Limpa a lista atual
        }

        this.#produtos.forEach((produto) => {
          let li = document.createElement('li');
          li.textContent = produto.toString();
          estoqueLista.appendChild(li);
        });

        this.limparConteudo();
      }
    } catch (error) {
      console.error("Erro ao atualizar a lista de produtos:", error);
    }
  }

  limparConteudo() {
    try {
      let nomeInput = document.getElementById('nome');
      let quantidadeInput = document.getElementById('quantidade');
      let precoInput = document.getElementById('preco');

      if ((nomeInput instanceof HTMLInputElement) && (quantidadeInput instanceof HTMLInputElement) && (precoInput instanceof HTMLInputElement)) {
        nomeInput.value = '';
        quantidadeInput.value = '';
        precoInput.value = '';
      }
    } catch (error) {
      console.error("Erro ao limpar os campos:", error);
    }
  }

  removerProduto() {
    try {
      let nomeInput = document.getElementById('nome');

      if (nomeInput instanceof HTMLInputElement) {
        let nome = nomeInput.value;

        if (nome === '') {
          alert('Informe o nome do produto para a remoção!');
        }

        let indice = this.#produtos.findIndex((produto) => produto.nome === nome);
        if (indice >= 0) {
          this.#produtos.splice(indice, 1); // Remove o produto do estoque
          this.atualizar();
        } else {
          alert('Produto não encontrado!');
        }

        this.limparConteudo();
      }
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    let gerenciadorDeProdutos = new GerenciadorDeProdutos();
    gerenciadorDeProdutos.configurar();
  } catch (error) {
    console.error("Erro ao inicializar o Gerenciador de Produtos:", error);
  }
});

