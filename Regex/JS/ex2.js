// Expressão regular para validar um nome completo
const Regex = /^\d{2}\.\d{3}\.\d{3}-\d{2}$/;


// Função para validar o nome completo
function validarCPF(cpf) {
    return Regex.test(cpf);
}

// Adiciona um evento ao botão para validar o nome
document.getElementById("btn").addEventListener("click", function () {
    const input = document.getElementById("cpf").value;
    const resultado = validarCPF(input);
    const resultadoElemento = document.getElementById("resultado");

    if (resultado) {
        resultadoElemento.textContent = "Nome válido!";
    } else {
        resultadoElemento.textContent = "Nome inválido!";
    }
});
  
  