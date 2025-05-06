
document.addEventListener('DOMContentLoaded', function () {
    configurar();
  });
  
  function configurar() {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', 
        
        function () {
      let diaSemana = DiaDaSemana();
      alert('O dia da semana é: ' + diaSemana);
      
    });
  }
  
  function DiaDaSemana() {
    let inputDate = document.getElementById('data').value;
    let dia = new Date(inputDate).getUTCDay();
    let diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diasDaSemana[dia];
  }
  
  
  