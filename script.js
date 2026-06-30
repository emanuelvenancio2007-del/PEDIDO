// ==========================================
// PROJETO PEDIDO - VERSÃO 2
// PARTE 1
// ==========================================

// ==============================
// ELEMENTOS DA PÁGINA
// ==============================

const ui = {
    nao: document.getElementById("nao"),
    sim: document.getElementById("sim"),
    estrelas: document.getElementById("stars"),
    mensagem: document.getElementById("mensagem"),
    container: document.querySelector(".container"),
    carta: document.getElementById("carta"),
    textoCarta: document.getElementById("textoCarta")
};

// ==============================
// FRASES DO BOTÃO NÃO
// ==============================

const frases = [
    "😂 Boa tentativa!",
    "🤨 Tem certeza disso?",
    "😎 Acho melhor apertar o azul.",
    "❤️ Esse botão ficou tímido.",
    "🚫 Essa opção está desativada.",
    "🤣 Você é bem insistente.",
    "🙃 Quase conseguiu.",
    "🥹 Tadinho do Emanuel...",
    "👀 Eu vi isso hein...",
    "💙 O botão azul está logo ali."
];

// ==============================
// INICIAR O SITE
// ==============================

iniciar();

function iniciar() {

    criarEstrelas();

    configurarBotaoNao();

    configurarBotaoSim();

}

// ==============================
// ESTRELAS
// ==============================

function criarEstrelas() {

    ui.estrelas.innerHTML = "";

    for (let i = 0; i < 180; i++) {

        const estrela = document.createElement("div");

        estrela.className = "star";

        estrela.style.left = Math.random() * 100 + "vw";

        estrela.style.top = Math.random() * 100 + "vh";

        estrela.style.animationDelay = (Math.random() * 2).toFixed(2) + "s";

        estrela.style.animationDuration = (1.5 + Math.random() * 2) + "s";

        ui.estrelas.appendChild(estrela);

    }

}

// ==============================
// BOTÃO NÃO
// ==============================

function configurarBotaoNao() {

    ui.nao.addEventListener("mouseenter", moverBotao);

    ui.nao.addEventListener("click", moverBotao);

    ui.nao.addEventListener("touchstart", moverBotao);

}

// ==============================
// MOVER BOTÃO
// ==============================

function moverBotao(event) {

    event.preventDefault();

    const area = ui.container.getBoundingClientRect();

    const larguraBotao = ui.nao.offsetWidth;

    const alturaBotao = ui.nao.offsetHeight;

    let esquerda;

    let topo;

    let tentativas = 0;

    do {

        esquerda = area.left + Math.random() * (area.width - larguraBotao);

        topo = area.top + Math.random() * (area.height - alturaBotao);

        tentativas++;

    } while (

        esquerda > area.left + area.width * 0.45 &&
        topo > area.top + area.height * 0.45 &&
        tentativas < 30

    );

    ui.nao.style.position = "fixed";

    ui.nao.style.left = esquerda + "px";

    ui.nao.style.top = topo + "px";

    mostrarMensagem();

}

// ==============================
// MOSTRAR MENSAGEM
// ==============================

function mostrarMensagem() {

    const frase = frases[Math.floor(Math.random() * frases.length)];

    ui.mensagem.textContent = frase;

    ui.mensagem.classList.add("show");

    clearTimeout(ui.mensagemTimer);

    ui.mensagemTimer = setTimeout(() => {

        ui.mensagem.classList.remove("show");

    }, 1800);

}

// ==============================
// BOTÃO SIM
// ==============================

function configurarBotaoSim() {

    ui.sim.addEventListener("click", iniciarSurpresa);

}

// ==============================
// SURPRESA
// ==============================

function iniciarSurpresa() {

    ui.container.style.display = "none";

    criarTelaLoading();

}

// ==============================
// LOADING
// ==============================

function criarTelaLoading() {

    const loading = document.createElement("div");

    loading.id = "loading";

    loading.innerHTML = `
        <h1>❤️</h1>

        <h2 id="status">
            Inicializando...
        </h2>

        <div class="barra">

            <div class="progresso"></div>

        </div>

        <p id="porcentagem">
            0%
        </p>
    `;

    document.body.appendChild(loading);

    iniciarLoading();

}

// ==========================================
// CONTINUAÇÃO - PARTE 2
// ==========================================

// ==============================
// INICIAR LOADING
// ==============================

function iniciarLoading() {

    const barra = document.querySelector(".progresso");
    const porcentagem = document.getElementById("porcentagem");
    const status = document.getElementById("status");

    const etapas = [
        { numero: 0, texto: "Inicializando..." },
        { numero: 25, texto: "Analisando sua resposta..." },
        { numero: 50, texto: "Calculando sinceridade..." },
        { numero: 75, texto: "Preparando uma surpresa..." },
        { numero: 95, texto: "Quase pronto... ❤️" }
    ];

    let progresso = 0;

    const intervalo = setInterval(() => {

        progresso++;

        barra.style.width = progresso + "%";

        porcentagem.textContent = progresso + "%";

        etapas.forEach(etapa => {

            if (progresso === etapa.numero) {

                status.textContent = etapa.texto;

            }

        });

        if (progresso >= 100) {

            clearInterval(intervalo);

            setTimeout(() => {

                mostrarCarta();

            }, 700);

        }

    }, 25);

}

// ==============================
// MOSTRAR CARTA
// ==============================

function mostrarCarta() {

    const loading = document.getElementById("loading");

    if (loading) {

        loading.remove();

    }

    ui.carta.style.display = "flex";

    setTimeout(() => {

        document.querySelector(".papel").style.display = "block";

        escreverCarta();

    }, 1200);

}

// ==============================
// TEXTO DA CARTA
// ==============================

const textoCarta = `Oi...

Eu só queria te dizer uma coisinha.

Pode parecer cedo...

Mas o pouco tempo que nós nos conhecemos já foi suficiente para eu gostar muito de você.

Cada conversa, cada risada e cada momento fizeram eu perceber o quanto a sua companhia faz bem.

Você consegue deixar meus dias mais leves sem nem perceber.

Talvez isso tudo pareça um pouco bobo...

Mas eu achei que uma simples mensagem nunca seria suficiente.

Então resolvi fazer esse site pra você.

Espero que ele tenha conseguido arrancar pelo menos um sorriso seu.

❤️`;

// ==============================
// ESCREVER CARTA
// ==============================

function escreverCarta() {

    ui.textoCarta.textContent = "";

    let indice = 0;

    const velocidade = 28;

    const digitando = setInterval(() => {

        ui.textoCarta.textContent += textoCarta.charAt(indice);

        indice++;

        if (indice >= textoCarta.length) {

            clearInterval(digitando);

            finalizarCarta();

        }

    }, velocidade);

}

// ==============================
// FINAL DA CARTA
// ==============================

function finalizarCarta() {

    const botao = document.createElement("button");

    botao.id = "continuar";

    botao.textContent = "❤️ Tem mais uma surpresa";

    botao.style.marginTop = "35px";

    botao.style.padding = "15px 30px";

    botao.style.fontSize = "18px";

    botao.style.cursor = "pointer";

    botao.style.border = "none";

    botao.style.borderRadius = "12px";

    botao.style.background = "#3b82f6";

    botao.style.color = "white";

    botao.style.boxShadow = "0 0 20px #3b82f6";

    document.querySelector(".papel").appendChild(botao);

    botao.addEventListener("click", surpresaFinal);

}

// ==========================================
// CONTINUAÇÃO - PARTE 3
// ==========================================

// ==============================
// SURPRESA FINAL
// ==============================

function surpresaFinal() {

    document.querySelector(".papel").innerHTML = `

        <h2>❤️ Obrigado por chegar até aqui ❤️</h2>

        <p style="margin-top:25px;line-height:1.8;white-space:pre-wrap;">

Espero que esse pequeno site tenha conseguido arrancar pelo menos um sorriso seu.

Talvez eu seja um pouco bobo...

Mas achei que você merecia algo diferente de uma simples mensagem.

Obrigado por ler até aqui.

❤️

        </p>

        <button id="btnCoracoes">

            ❤️ Clique aqui ❤️

        </button>

    `;

    document
        .getElementById("btnCoracoes")
        .addEventListener("click", iniciarCoracoes);

}

// ==============================
// CORAÇÕES
// ==============================

function iniciarCoracoes() {

    for (let i = 0; i < 80; i++) {

        criarCoracao(i * 120);

    }

}

// ==============================
// CRIAR CORAÇÃO
// ==============================

function criarCoracao(delay) {

    setTimeout(() => {

        const coracao = document.createElement("div");

        coracao.className = "heart";

        coracao.innerHTML = "❤️";

        coracao.style.left = Math.random() * 100 + "vw";

        coracao.style.fontSize =
            (18 + Math.random() * 22) + "px";

        coracao.style.animationDuration =
            (4 + Math.random() * 3) + "s";

        document.body.appendChild(coracao);

        setTimeout(() => {

            coracao.remove();

        }, 7000);

    }, delay);

}

// ==============================
// OPCIONAL
// TOCAR MÚSICA
// ==============================

function tocarMusica() {

    if (window.musica) {

        musica.play();

    }

}

// ==============================
// UTILIDADE
// ==============================

function mostrar(elemento) {

    elemento.style.display = "flex";

}

function esconder(elemento) {

    elemento.style.display = "none";

}

// ==========================================
// FIM DO SCRIPT
// ==========================================
