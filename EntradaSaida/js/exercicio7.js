function calcularPreco() {
    let produtoEscolhido = document.getElementById("produto");
    let descontoEscolhido = document.getElementById("desconto");

    if (produtoEscolhido instanceof HTMLSelectElement && descontoEscolhido instanceof HTMLSelectElement) {
        let iProduto = produtoEscolhido.selectedIndex;
        let iDesconto = descontoEscolhido.selectedIndex;

        let precoProduto = parseFloat(produtoEscolhido.options[iProduto].value);
        let selecaoProduto = produtoEscolhido.options[iProduto].text;

        let desconto = parseFloat(descontoEscolhido.options[iDesconto].value); 
        let selecaoDesconto = descontoEscolhido.options[iDesconto].text;

        let valorDesconto = (precoProduto * desconto) / 100;
        let valorFinal = precoProduto - valorDesconto;

        document.getElementById("resultado").innerText =
            `Produto escolhido: ${selecaoProduto}\n` +
            `Preço original: R$ ${precoProduto.toFixed(2)}\n` +
            `Desconto aplicado: ${selecaoDesconto}\n` +
            `Preço final: R$ ${valorFinal.toFixed(2)}`;
    }
}