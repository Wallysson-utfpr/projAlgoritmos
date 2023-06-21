var indicePergunta = 0;
var perguntas = [
  {
    pergunta: "Como contar de 1 a 10 utilizando um loop for?",
    resposta: "for (var i = 1; i <= 10; i++)",
    opcoes: [
      "for (var i = 1; i <= 10; i++)",
      "count (var i = 1; i <= 10; i++)",
      "for (var = 1; i < 10; i++)",
    ],
  },
  {
    pergunta: "Como contar de 1 a 10 utilizando um loop while?",
    resposta: "var i = 1; while(i <= 10) { i++; }",
    opcoes: [
      "count (var i = 1; i <= 10; i++)",
      "var i = 1; while(i <= 10) { i++; }",
      "var i = 1; loop(i < 10) { i--; }",
    ],
  },
  {
    pergunta: "Como contar de 1 a 10 utilizando um loop do while?",
    resposta: "var i = 1; do { i++; } while(i <= 10);",
    opcoes: [
      "loop { var i = 1; i++; } until(i <= 10);",
      "var i = 1; do { i++; } while(i <= 10);",
      "var i = 1; do { i--; } until(i < 10);",
    ],
  },
];

var elementoPergunta = document.getElementById("pergunta");
var elementoOpcoes = document.getElementById("opcoes");
var elementoResultado = document.getElementById("resultado");
var elementoContador = document.getElementById("contador");
var elementoContagem = document.getElementById("contagem");
var botaoVerificar = document.getElementById("verificar");
var elementoH2 = document.querySelector("h2");

function exibirProximaPergunta() {
  if (indicePergunta < perguntas.length) {
    elementoPergunta.textContent = perguntas[indicePergunta].pergunta;
    elementoOpcoes.innerHTML = "";
    perguntas[indicePergunta].opcoes.forEach((opcao) => {
      var button = document.createElement("button");
      button.textContent = opcao;
      button.onclick = function () {
        verificarResposta(opcao);
      };
      elementoOpcoes.appendChild(button);
    });
    elementoResultado.textContent = "";
    elementoContador.style.display = "none";
  } else {
    elementoPergunta.textContent = "Parabéns! Você concluiu o jogo.";
    elementoOpcoes.style.display = "none";
    elementoResultado.style.display = "none";
    elementoContador.style.display = "none";
    botaoVerificar.style.display = "none";
  }
}

// Continua o código...

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
        setTimeout(exibirProximaPergunta, 1800);
      }, 400);
    }
  }, 400);
}

function verificarResposta(respostaUsuario) {
  var respostaCorreta = perguntas[indicePergunta].resposta;
  if (respostaUsuario === respostaCorreta) {
    elementoResultado.textContent = "Resposta correta!";
    elementoContador.style.display = "block";
    contarNumeros();
  } else {
    elementoResultado.textContent = "Resposta incorreta. Tente novamente.";
  }
}

exibirProximaPergunta();
