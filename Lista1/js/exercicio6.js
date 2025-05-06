function exibir() {
    let disciplinaSelecionada = document.getElementById("escolha");

    if (disciplinaSelecionada instanceof HTMLSelectElement) {
        let i = disciplinaSelecionada.selectedIndex;
        //puxa a disciplina selecionada
        let selecionada = disciplinaSelecionada.options[i].text;
        var mensagem = "Você escolheu a disciplina de " + selecionada + ".";
        document.getElementById("resultado").innerText = mensagem;
    }
}