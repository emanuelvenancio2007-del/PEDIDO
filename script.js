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

// Botão fugindo
botaoNao.addEventListener("mouseenter", () => {

    const largura = window.innerWidth - 250;
    const altura = window.innerHeight - 120;

    botaoNao.style.position = "fixed";
    botaoNao.style.left = Math.random() * largura + "px";
    botaoNao.style.top = Math.random() * altura + "px";

});

// Botão SIM
botaoSim.addEventListener("click", () => {
    alert("Funcionou! ❤️");
});
