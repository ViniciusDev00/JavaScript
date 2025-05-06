export default class Produto {
    #nome;
    #quantidade;
    #preco;
  
    constructor(nome, quantidade, preco) {
      try {
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#preco = preco;
      } catch (error) {
        console.error("Erro ao criar produto:", error);
      }
    }
  
    get nome() {
      return this.#nome;
    }
  
    valorTotal() {
      try {
        return (this.#quantidade * this.#preco).toFixed(2);
      } catch (error) {
        console.error("Erro ao calcular o valor total do produto:", error);
        return "0.00";
      }
    }
  
    toString() {
      try {
        return `Nome: ${this.#nome}, Quantidade: ${this.#quantidade}, Preço Unitário: R$ ${this.#preco}, Valor Total: R$ ${this.valorTotal()}`;
      } catch (error) {
        console.error("Erro ao converter produto para string:", error);
        return "Erro ao exibir o produto";
      }
    }
  }
  