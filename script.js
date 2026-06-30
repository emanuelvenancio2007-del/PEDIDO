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
    "😂 Boa tentativa, Laura...",
    "🤨 Acho que esse botão resolveu te desafiar.",
    "😅 Esse botão está um pouco tímido hoje.",
    "❤️ Acho que o azul combina mais com você.",
    "👀 Quase conseguiu...",
    "🥹 Faz isso comigo não, Laura.",
    "💙 Tenho quase certeza que você queria o outro.",
    "🤣 Esse botão decidiu fugir.",
    "✨ Vai... tenta o azul.",
    "😌 Eu prometo que vale a pena."
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
    { numero: 0, texto: "Preparando uma surpresa para a Laura..." },
    { numero: 25, texto: "Analisando seu sorriso..." },
    { numero: 50, texto: "Calculando a coragem do Emanuel..." },
    { numero: 75, texto: "Colocando tudo no lugar..." },
    { numero: 95, texto: "Quase lá... ❤️" }
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

const textoCarta = `Oi, Laura...

Talvez você esteja se perguntando por que eu resolvi fazer um site inteiro só para dizer algumas coisas.

A verdade é que uma mensagem comum parecia simples demais.

Então pensei:

"Por que não criar algo que faça ela sorrir?"

Pode parecer cedo...

Mas o pouco tempo que nós nos conhecemos já foi suficiente para eu gostar muito de você.

Cada conversa, cada risada e cada momento fizeram eu perceber o quanto a sua companhia faz bem.

Você consegue deixar meus dias mais leves sem nem perceber.

Talvez eu esteja sendo um pouco maluco por fazer tudo isso...

Mas achei que você merecia algo diferente.

Espero, de verdade, que esse pequeno site consiga arrancar pelo menos um sorriso seu.

Com carinho,

Emanuel ❤️`;

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
