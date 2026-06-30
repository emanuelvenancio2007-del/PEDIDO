const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");
const stars = document.getElementById("stars");

// ======== ESTRELAS =========

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*2+"s";

    stars.appendChild(star);

}

// ======== BOTÃO FUGINDO =========

botaoNao.addEventListener("mouseenter",()=>{

    const largura=window.innerWidth-250;

    const altura=window.innerHeight-120;

    botaoNao.style.position="absolute";

    botaoNao.style.left=Math.random()*largura+"px";

    botaoNao.style.top=Math.random()*altura+"px";

});

// ======== BOTÃO SIM =========

botaoSim.onclick=()=>{

document.body.innerHTML=`

<div class="container">

<h1>❤️</h1>

<h2>Analisando resposta...</h2>

<div class="barra">

<div class="progresso"></div>

</div>

<p id="texto">

0%

</p>

</div>

`;

let porcentagem=0;

const texto=document.getElementById("texto");

const barra=document.querySelector(".progresso");

const intervalo=setInterval(()=>{

    porcentagem++;

    texto.innerHTML=porcentagem+"%";

    barra.style.width=porcentagem+"%";

    if(porcentagem==100){

        clearInterval(intervalo);

        setTimeout(carta,700);

    }

},30);

}

function carta(){

document.body.innerHTML=`

<div class="container">

<h1>❤️</h1>

<h2>Eu sabia...</h2>

<p>

Você acabou de deixar o Emanuel extremamente feliz.

<br><br>

Talvez esse seja o jeito mais nerd que alguém já encontrou de dizer isso...

Mas eu queria fazer algo diferente.

Obrigado por chegar até aqui.

❤️

</p>

</div>

`;

}
