const formulario = document.querySelector("form");
const entradaResposta = document.querySelector("#resposta");
const textoResultado = document.querySelector("#resultado");
const textoTarefa = document.querySelector("#texto-tarefa");
const imagem = document.querySelector("img");

let tarefaAtual = 0;

const tarefas = [
    {
        texto: "Posicione a imagem no canto superior esquerdo da tela usando as propriedades 'justify-content' e 'align-items'.",
        resposta: "justify-content: flex-start; align-items: flex-start;",
    },
    {
        texto: "Posicione a imagem no canto superior direito da tela usando as propriedades 'justify-content' e 'align-items'.",
        resposta: "justify-content: flex-end; align-items: flex-start;",
    },
    {
        texto: "Posicione a imagem no centro da tela horizontalmente usando a propriedade 'justify-content'.",
        resposta: "justify-content: center;",
    },
    {
        texto: "Posicione a imagem no centro da tela verticalmente usando a propriedade 'align-items'.",
        resposta: "align-items: center;",
    },
];

exibirTarefa(tarefaAtual);

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const resposta = entradaResposta.value.toLowerCase();

    if (resposta === tarefas[tarefaAtual].resposta) {
        textoResultado.textContent = "Parabéns, você acertou!";
        textoResultado.style.color = "#1abc9c";
        tarefaAtual++;
        entradaResposta.value = "";
        exibirTarefa(tarefaAtual);

        if (tarefaAtual === tarefas.length) {
            entradaResposta.disabled = true;
        } else {
            atualizarPosicaoImagem(tarefaAtual);
        }
    } else {
        textoResultado.textContent = "Ops, tente novamente!";
        textoResultado.style.color = "#c0392b";
    }
});

function exibirTarefa(indice) {
    textoTarefa.textContent = tarefas[indice].texto;
}

function atualizarPosicaoImagem(indice) {
    if (indice === 0) {
        imagem.style.left = "0";
        imagem.style.top = "0";
    } else if (indice === 1) {
        imagem.style.left = "calc(100% - 100px)";
        imagem.style.top = "0";
    } else if (indice === 2) {
        imagem.style.left = "50%";
        imagem.style.top = "50%";
    } else if (indice === 3) {
        imagem.style.left = "calc(50% - 50px)";
        imagem.style.top = "calc(100% - 100px)";
    }

    imagem.style.position = "absolute";
}
