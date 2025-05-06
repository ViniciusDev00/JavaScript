function calcularCirculo() {
    let entradaRaio = document.getElementById("raio");

    if(entradaRaio instanceof HTMLInputElement){
        let raio = Number(entradaRaio.value);
        let calculo = 3.14 * raio**2;

        document.body.insertAdjacentHTML("beforeend", "A área do círculo é: " + calculo);
    }
}