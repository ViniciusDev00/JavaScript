function calcularTemp(){
    let entradaTemp = document.getElementById("tempCelsius");

    if(entradaTemp instanceof HTMLInputElement){
        let celsius = Number(entradaTemp.value);
        let fahrenheit = (celsius * 9/5) + 32;
        let kelvin = celsius + 273.15;

        document.body.insertAdjacentHTML("beforeend", "Temperatura em Fahrenheit (°F): " + fahrenheit + " | Temperatura em Kelvin (°K):" + kelvin);
    }
}