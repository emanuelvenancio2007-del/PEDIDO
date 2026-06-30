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

const frases = [

"😂 Boa tentativa.",

"😒 Essa opção está desativada.",

"🤨 Tem certeza disso?",

"❤️ Vai no azul, confia.",

"🤣 Você é bem insistente!",

"🚫 Erro 404: opção não encontrada.",

"😎 O botão entrou em modo de fuga."

];

botaoNao.addEventListener("mouseenter", fugir);
botaoNao.addEventListener("click", fugir);

function fugir(){

    const largura = window.innerWidth - 250;
    const altura = window.innerHeight - 120;

    botaoNao.style.position = "fixed";

    botaoNao.style.left = Math.random()*largura+"px";

    botaoNao.style.top = Math.random()*altura+"px";

    mensagem.innerHTML = frases[Math.floor(Math.random()*frases.length)];

    mensagem.classList.add("show");

    setTimeout(()=>{

        mensagem.classList.remove("show");

    },1800);

}

// Botão SIM
botaoSim.addEventListener("click", () => {
    alert("Funcionou! ❤️");
});
