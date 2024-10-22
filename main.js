let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');
let contagemPalpites = 1;
let botaoReiniciar;

function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }

    palpites.textContent += palpiteUsuario + " ";

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "vosê acerto disgrasadooo!";
        ultimoResultado.style.backgroundColor = "green";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = `perdeu otario '-'`;
        baixoOuAlto.textContent = "";
            finalizarJogo();
    } else {
        ultimoResultado.textContent = "Errado pora";
        ultimoResultado.style.backgroundColor = "red";
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = "ta baixo nengue";
        } else if (ultimoResultado > numeroAleatorio) {
            baixoOuAlto.textContent = "ta mais alto nengue";
        }
    }

    contagemPalpites++;
    campoPalpite.value = "";
    campoPalpite.focus();
}

envioPalpite.addEventListener("click", verificarPalpite();

function finalizarJogo() {
    campoPalpite.disabled = true;
    envioPalplite.disabled = true;
    botaoReiniciar = document.createElement('button');
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.addEventListener('click', reiniciarJogo());
}


function reiniciarJogo() {
    contagemPalpites = 1;
    const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultado p');
    for (const paragrafoReiniciar of paragrafosReiniciar) {
        paragrafoReiniciar.textContent = "";
    }

    botaoReiniciar.parentNode.removeChild(botaoReiniciar);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();
    ultimoResultado.style.backgroundColor = 'white';
    numeroAleatorio = Math.floor(Math.random * 100) + 1
}
