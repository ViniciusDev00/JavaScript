// Expressão regular para validar um nome completo
const Regex = /^[A-Z][a-z]+\s/;

// Função para validar o nome completo
function validarNomeCompleto(nome) {
    return Regex.test(nome);
}

// Adiciona um evento ao botão para validar o nome
document.getElementById("btn").addEventListener("click", function () {
    const input = document.getElementById("frase").value;
    const resultado = validarNomeCompleto(input);
    const resultadoElemento = document.getElementById("resultado");

    if (resultado) {
        resultadoElemento.textContent = "Nome válido!";
    } else {
        resultadoElemento.textContent = "Nome inválido!";
    }
});
  
  