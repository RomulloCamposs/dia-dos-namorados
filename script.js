// script.js
// Dados de login corretos
const NOME_CORRETO = "Gaby";
const SENHA_CORRETA = "20122023";

// Função de login
function login() {
  const nome = document.getElementById("loginName").value.trim();
  const senha = document.getElementById("loginPassword").value.trim();

  if (nome === NOME_CORRETO && senha === SENHA_CORRETA) {
    goTo("momentos-screen");
  } else {
    alert("Nome ou senha incorretos! Tente novamente 💔");
  }
}


const historicoTelas = [];

function goTo(telaId) {
  const telas = document.querySelectorAll(".screen");
  const telaAtual = document.querySelector(".screen.active");

  if (telaAtual) {
    telaAtual.classList.remove("active");
    historicoTelas.push(telaAtual.id);
  }

  const proximaTela = document.getElementById(telaId);
  if (proximaTela) {
    proximaTela.classList.add("active");
  }
}

function voltar() {
  const telas = document.querySelectorAll(".screen");
  const telaAtual = document.querySelector(".screen.active");

  if (telaAtual) {
    telaAtual.classList.remove("active");
  }

  const telaAnterior = historicoTelas.pop();
  if (telaAnterior) {
    document.getElementById(telaAnterior).classList.add("active");
  }
}
