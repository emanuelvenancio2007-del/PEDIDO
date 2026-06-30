const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");
const stars = document.getElementById("stars");
const mensagem = document.getElementById("mensagem");

// Estrelas
for (let i = 0; i < 180; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 2 + "s";
    stars.appendChild(star);
}

const frases=[

"😂 Boa tentativa!",

"🤨 Tem certeza?",

"😎 Acho melhor apertar o azul.",

"❤️ Esse botão ficou tímido.",

"🚫 Essa opção está em manutenção.",

"🤣 Você não desiste mesmo.",

"🙃 Quase conseguiu.",

"🥹 Tadinho do Emanuel..."

];

botaoNao.addEventListener("mouseenter", fugir);
botaoNao.addEventListener("click", fugir);

function fugir() {

    const card = document.querySelector(".container");
    const cardRect = card.getBoundingClientRect();

    let x;
    let y;

    do {

        x = cardRect.left + Math.random() * (cardRect.width - 180);
        y = cardRect.top + Math.random() * (cardRect.height - 80);

    } while (
        x > cardRect.width / 2 &&
        y > cardRect.height / 2
    );

    botaoNao.style.position = "fixed";
    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";

    mensagem.innerHTML =
        frases[Math.floor(Math.random() * frases.length)];

    mensagem.classList.add("show");

    setTimeout(() => {

        mensagem.classList.remove("show");

    }, 1500);

}

botaoSim.addEventListener("click", () => {

    document.querySelector(".container").style.display = "none";

    document.body.innerHTML += `

    <div id="loading">

        <h1>❤️</h1>

        <h2 id="status">Inicializando...</h2>

        <div class="barra">

            <div class="progresso"></div>

        </div>

        <p id="porcentagem">0%</p>

    </div>

    `;

    const status = document.getElementById("status");

    let numero = 0;

    const texto = document.getElementById("porcentagem");

    const barra = document.querySelector(".progresso");

    const tempo = setInterval(() => {

        numero++;

        barra.style.width = numero + "%";

        texto.innerHTML = numero + "%";

        if(numero == 25){

    status.innerHTML = "Analisando sua resposta...";

}

if(numero == 50){

    status.innerHTML = "Calculando sinceridade...";

}

if(numero == 75){

    status.innerHTML = "Preparando surpresa...";

}

if(numero == 95){

    status.innerHTML = "Quase pronto... ❤️";

}

        if(numero >= 100){

            clearInterval(tempo);

            setTimeout(carta,700);

        }

    },25);

});

function carta(){

    document.getElementById("loading").innerHTML = `

        <h1>💌</h1>

        <h2>Uma cartinha pra você...</h2>

        <div id="textoCarta">
            TESTE TESTE TESTE ❤️
        </div>

    `;

}

function escreverCarta(){

const texto = `

Oi...

Eu só queria te dizer uma coisinha.

Pode parecer cedo...

Mas o pouco tempo que nós nos conhecemos já foi suficiente para eu gostar muito de você.

Cada conversa, cada risada e cada momento fizeram eu perceber o quanto sua companhia faz bem.

Você consegue deixar meus dias mais leves sem nem perceber.

Foi por isso que resolvi fazer esse site.

Porque uma simples mensagem nunca seria suficiente para demonstrar o quanto eu queria te fazer sorrir.

❤️

`;

let i = 0;

const elemento = document.getElementById("textoCarta");

const intervalo = setInterval(()=>{

    elemento.innerHTML += texto.charAt(i);

    i++;

    if(i >= texto.length){

        clearInterval(intervalo);

    }

},35);

}
