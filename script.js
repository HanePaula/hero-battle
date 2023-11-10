const formulario = document.getElementById('form');
const resposta = document.getElementById('resposta');
const formularioTexto = document.getElementById('form-texto');
const formularioBotao = document.getElementById('botao');
const apresentacao = document.getElementById('apresentacao');
let contadorRespostas = 0;

formulario.addEventListener('submit', (submit) => {
    submit.preventDefault();
    contadorRespostas++;
    if (contadorRespostas === 1) {
        resposta.dataset.nome = resposta.value;

        formularioTexto.innerText = 'Qual a idade do herói?';
        botao.innerText = 'Escolher classe';

        resposta.value = '';

    }

    else if (contadorRespostas === 2) {
        resposta.dataset.idade = resposta.value;

        apresentacao.removeChild(apresentacao.children[1]);

        const divNova = document.createElement('div');
        divNova.className = "apresentacao-cards";
        divNova.setAttribute('id', 'cards')
        divNova.innerHTML = ` <div class="card" id="mago">
        <div class="card-icone">
            <img src="assets/mago.jpeg" alt="Mago">
        </div>
        <div class="card-texto">
            <p>Mago</p>
            <p>Magia</p>
        </div>
    </div>
    <div class="card" id="guerreiro">
        <div class="card-icone">
            <img src="assets/guerreiro.jpeg" alt="Guerreiro">
        </div>
        <div class="card-texto">
            <p>Guerreiro</p>
            <p>Espada</p>
        </div>
    </div>
    <div class="card" id="monge">
        <div class="card-icone">
            <img src="assets/monge.jpeg" alt="Monge">
        </div>
        <div class="card-texto">
            <p>Monge</p>
            <p>Artes Marciais</p>
        </div>
    </div>
    <div class="card" id="ninja">
        <div class="card-icone">
            <img src="assets/ninja.jpeg" alt="Ninja">
        </div>
        <div class="card-texto">
            <p>Ninja</p>
            <p>Shuriken</p>
        </div>
    </div>`

        apresentacao.appendChild(divNova);
        
    }
})