export default class Pedido{
    #nome;
    #quantidade;
    #preco;

    constructor (nome, quantidade, preco){
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#preco = preco;
    }

    get nome(){
        return this.#nome;
    }

    valorTotal(){
        let valorTotal = (this.#quantidade * this.#preco);
        let taxa = (valorTotal * 0.10);
        let valorFinal = valorTotal + taxa;
        return valorFinal.toFixed(2);
    }

    toString(){
        return `Itens: ${this.#nome}, Quantidade: ${this.#quantidade}, 
        Preço Unitário: R$ ${this.#preco}, Valor Total: R$ ${this.valorTotal()}`;
    }
}