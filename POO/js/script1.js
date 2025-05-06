import Aluno from './Aluno.js';

let aluno;

function acrescentar(notaInput) {
  try {
    let nota = Number(notaInput.value);

    if (!isNaN(nota) && (nota >= 0) && (nota <= 10)) {
      if (!aluno) {
        alert('Por favor, insira o nome do aluno antes de adicionar notas.');
        return;
      }
      aluno.adicionarNota(nota);
      notaInput.value = '';
      exibirConteudo();
    } else {
      alert('Digite uma nota válida entre 0 e 10.');
    }
  } catch (error) {
    console.error("Erro ao adicionar a nota:", error);
  }
}

function obterNome() {
  try {
    let nomeInput = document.getElementById('nome');
    if (nomeInput instanceof HTMLInputElement) {
      return nomeInput.value;
    }
    return '';
  } catch (error) {
    console.error("Erro ao obter o nome do aluno:", error);
    return '';
  }
}

function inicializarAluno() {
  try {
    let nome = obterNome();

    if (!nome) {
      alert('Por favor, insira o nome do aluno.');
      return false;
    }
    if (!aluno) {
      aluno = new Aluno(nome);
    } else {
      aluno = new Aluno(nome, aluno.notas);
    }
    return true;
  } catch (error) {
    console.error("Erro ao inicializar o aluno:", error);
    return false;
  }
}

function calcularMedia() {
  try {
    if (!aluno || !aluno.notas.length) {
      alert('Adicione ao menos uma nota antes de calcular a média.');
      return 0;
    }
    return aluno.calcularMedia();
  } catch (error) {
    console.error("Erro ao calcular a média:", error);
    return 0;
  }
}

function exibirConteudo() {
  try {
    let notasAdicionadas = document.getElementById('notasAdicionadas');
    if (notasAdicionadas instanceof HTMLParagraphElement) {
      notasAdicionadas.textContent = `Notas adicionadas: ${aluno.notas.join(', ')}`;
    }
  } catch (error) {
    console.error("Erro ao exibir as notas:", error);
  }
}

function exibirMedia() {
  try {
    let resultado = document.getElementById('resultado');

    if (resultado instanceof HTMLParagraphElement) {
      let media = calcularMedia();
      resultado.textContent = `Aluno: ${aluno.nome}, Média: ${media}`;
    }
  } catch (error) {
    console.error("Erro ao exibir a média:", error);
  }
}

function limparConteudo() {
  try {
    let nomeInput = document.getElementById('nome');
    let notaInput = document.getElementById('nota');
    let notasAdicionadas = document.getElementById('notasAdicionadas');
    let resultado = document.getElementById('resultado');

    if ((nomeInput instanceof HTMLInputElement) && (notaInput instanceof HTMLInputElement) &&
      (notasAdicionadas instanceof HTMLParagraphElement) && (resultado instanceof HTMLParagraphElement)) {
      nomeInput.value = '';
      notaInput.value = '';
      notasAdicionadas.textContent = '';
      resultado.textContent = '';
      aluno = null;
    }
  } catch (error) {
    console.error("Erro ao limpar o conteúdo:", error);
  }
}

function configurar() {
  try {
    let notaInput = document.getElementById('nota');
    let adicionarNotaBtn = document.getElementById('adicionarNotaBtn');
    let calcularMediaBtn = document.getElementById('calcularMediaBtn');
    let limparConteudoBtn = document.getElementById('limparConteudoBtn');

    if ((notaInput instanceof HTMLInputElement) && (adicionarNotaBtn instanceof HTMLButtonElement) &&
      (calcularMediaBtn instanceof HTMLButtonElement) && (limparConteudoBtn instanceof HTMLButtonElement)) {
      adicionarNotaBtn.addEventListener('click', () => {
        if (inicializarAluno()) {
          acrescentar(notaInput);
        }
      });

      calcularMediaBtn.addEventListener('click', () => {
        exibirMedia();
      });

      limparConteudoBtn.addEventListener('click', () => {
        limparConteudo();
      });
    }
  } catch (error) {
    console.error("Erro ao configurar os botões e inputs:", error);
  }
}

document.addEventListener('DOMContentLoaded', configurar);
