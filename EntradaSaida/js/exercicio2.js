function calcular() {
  let entradaMaior = document.getElementById('baseMaior');
  let entradaMenor = document.getElementById('baseMenor');
  let entradaAltura = document.getElementById('altura');

  //prettier-ignore
  if (entradaMaior instanceof HTMLInputElement &&
    entradaMenor instanceof HTMLInputElement &&
    entradaAltura instanceof HTMLInputElement) {
        let maior = Number(entradaMaior.value);
        let menor = Number(entradaMenor.value);
        let altura = Number(entradaAltura.value);

        let calculoTrapezio = ((maior + menor ) * altura)/2;

        document.body.insertAdjacentHTML("beforeend", "O valor do cálculo é: " + calculoTrapezio);
  }
}
