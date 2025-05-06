function exibirFrase(){
    let entradaFrase = document.getElementById("frase");

    if(entradaFrase instanceof HTMLInputElement){
        let frase = (entradaFrase.value);
        let maiuscula = frase.toUpperCase();
        let minuscula = frase.toLowerCase();
        let caracteres = frase.length;

        document.body.insertAdjacentHTML("beforeend", "Frase maiúscula: " + maiuscula + " | Frase minúscula: " + minuscula + " | Quantidade de caracteres: " + caracteres);
    }
}