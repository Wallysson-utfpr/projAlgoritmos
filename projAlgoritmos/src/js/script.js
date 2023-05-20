var indicePergunta = 0;
var perguntas = [
  {
    pergunta: "Como contar de 1 a 10 utilizando um loop for?",
    resposta: "for(var i = 1; i <= 10; i++)",
  },
  {
    pergunta: "Como contar de 1 a 10 utilizando um loop while?",
    resposta: "var i = 1; while(i <= 10) { i++; }",
  },
  {
    pergunta: "Como contar de 1 a 10 utilizando um loop do while?",
    resposta: "var i = 1; do { i++; } while(i <= 10);",
  },
];

var elementoPergunta = document.getElementById("pergunta");
var elementoResposta = document.getElementById("resposta");
var elementoResultado = document.getElementById("resultado");
var elementoContador = document.getElementById("contador");
var elementoContagem = document.getElementById("contagem");
var botaoVerificar = document.getElementById("verificar");
var elementoH2 = document.querySelector("h2");

function exibirProximaPergunta() {
  if (indicePergunta < perguntas.length) {
    elementoPergunta.textContent = perguntas[indicePergunta].pergunta;
    elementoResposta.value = "";
    elementoResultado.textContent = "";
    elementoContador.style.display = "none";
  } else {
    elementoPergunta.textContent = "Parabéns! Você concluiu o jogo.";
    elementoResposta.style.display = "none";
    elementoResultado.style.display = "none";
    elementoContador.style.display = "none";
    botaoVerificar.style.display = "none";
  }
}

function contarNumeros() {
  elementoContagem.innerHTML = ""; // Limpa a contagem anterior
  var i = 1;
  var intervalo = setInterval(function () {
    var numeroElemento = document.createElement("li");
    numeroElemento.textContent = i;
    elementoContagem.appendChild(numeroElemento);
    i++;
    if (i > 11) {
      elementoContagem.innerHTML = "";
      elementoH2.innerHTML = "";
      numeroElemento.textContent = i;
      clearInterval(intervalo);
      setTimeout(function () {
        elementoResultado.textContent =
          "Você será direcionado para a próxima pergunta.";
        indicePergunta++;
        setTimeout(exibirProximaPergunta, 2000);
      }, 500);
    }
  }, 500);
}

function verificarResposta() {
  var respostaUsuario = elementoResposta.value.replace(/\s/g, ""); // Remove todos os espaços em branco
  var respostaCorreta = perguntas[indicePergunta].resposta.replace(/\s/g, ""); // Remove todos os espaços em branco

  if (respostaUsuario === respostaCorreta) {
    elementoResultado.textContent = "Resposta correta!";
    elementoContador.style.display = "block";
    contarNumeros();
  } else {
    elementoResultado.textContent = "Resposta incorreta. Tente novamente.";
  }
}

exibirProximaPergunta();
