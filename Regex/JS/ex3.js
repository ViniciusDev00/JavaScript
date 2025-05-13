// Expressão regular para validar uma senha forte

const RegexSenhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;

// "(?=" verifica se existe 
// ".*" qualquer quantidade [a-z])(?=.*[A-Z])
// "(?=.*\d)" verifica se tem digito 
// "(?=.*[\W_])" verifica se tem caracter especial 
// ".{8,16}" 8 a 16 caracter na senha $/


// Função para validar a senha
function validarSenhaForte(senha) {
    return RegexSenhaForte.test(senha);
}

// Evento para validar ao clicar no botão
document.getElementById("btn").addEventListener("click", function () {
    const input = document.getElementById("senha").value;
    const resultado = validarSenhaForte(input);
    const resultadoElemento = document.getElementById("resultado");

    resultadoElemento.textContent = resultado
        ? "Senha forte válida!"
        : "Senha inválida! Deve ter 8-16 caracteres, incluindo maiúscula, minúscula, número e símbolo.";
});
