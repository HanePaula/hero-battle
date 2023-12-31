const formulario = document.getElementById('form');
const resposta = document.getElementById('resposta');
const formularioTexto = document.getElementById('form-texto');
const formularioBotao = document.getElementById('botao');
const apresentacao = document.getElementById('apresentacao');
let contadorRespostas = 0;

class Heroi {
    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    ataque() {
        let texto;

        switch (this.tipo) {
            case 'Mago':
                texto = `O ${this.tipo} atacou usando magia.`
                break;
            
            case 'Guerreiro':
                texto = `O ${this.tipo} atacou usando espada.`
                break;

            case `Monge`:
                texto = `O ${this.tipo} atacou usando artes marciais.`
                break;

            case `Ninja`:
                texto = `O ${this.tipo} atacou usando shuriken.`
                break;
        }

        return texto;
    }
}

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

        let nome = resposta.dataset.nome;
        let idade = resposta.dataset.idade;

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

        let heroi = new Heroi(nome, idade);

        const cards = document.querySelectorAll('.card');

        cards.forEach((card) => {
            card.addEventListener('click', () => {
                let filhos = card.children;
                let texto = filhos[1];
                let tipo = texto.children[0].innerText;
                
                heroi.setTipo(tipo);

                apresentacao.removeChild(apresentacao.children[1]);

                const botaoRecarregar = document.createElement('button');
                botaoRecarregar.className = "novo-heroi";
                botaoRecarregar.setAttribute('id', 'novo-heroi');
                botaoRecarregar.innerText = 'Novo Herói';
                apresentacao.appendChild(botaoRecarregar);

                const cardHeroi = document.createElement('div');
                cardHeroi.className = "apresentacao-card";
                cardHeroi.setAttribute('id', 'card');
                cardHeroi.innerHTML = `<div class="card-icone">
                <img src="assets/${heroi.tipo.toLowerCase()}.jpeg" alt="${heroi.tipo}">
            </div>
            <div class="card-texto">
                <p>Nome: ${heroi.nome}</p>
                <p>Idade: ${heroi.idade}</p>
                <p>Classe: ${heroi.tipo}</p>
            </div>
            <button class="card-botao" id="atacar">Atacar</button>`
            apresentacao.appendChild(cardHeroi);

            const logDeBatalha = document.createElement('div');
            logDeBatalha.className = "apresentacao-log";
            logDeBatalha.setAttribute('id', 'log');
            logDeBatalha.innerHTML = `<p>Log da batalha</p>`;
            apresentacao.appendChild(logDeBatalha);

            botaoRecarregar.addEventListener('click', () => {
                window.location.reload();
            })

            const botaoAtaque = document.getElementById('atacar');

            botaoAtaque.addEventListener('click', () => {
                let ataque = heroi.ataque();
                
                const pAtaque = document.createElement('p');
                pAtaque.innerText = ataque;
                logDeBatalha.appendChild(pAtaque);
            })
            })
        })

    }
})