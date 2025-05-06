
document.addEventListener('DOMContentLoaded', function () {
  configurar();
});

function configurar() {
  let btn = document.getElementById('btn');
  btn.addEventListener('click', 
      
      function () {
    let Tempo = TempoFaltante();
    alert('Falta' + Tempo + ' para o evento.');
    
  });
}

function TempoFaltante() {
  let dataEvento = document.getElementById('data').value;
  let dataAtual = new Date();
  let dataEventoDate = new Date(dataEvento);
  let tempoFaltante = dataEventoDate - dataAtual;
  
  if (tempoFaltante < 0) {
    return 'O evento já ocorreu.';
  } else {
    let diasFaltantes = Math.floor(tempoFaltante / (1000 * 60 * 60 * 24));
    return diasFaltantes + ' dias';
  }
}

