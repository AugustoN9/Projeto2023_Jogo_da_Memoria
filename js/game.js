const tabuleiro = document.getElementById('tabuleiro');

const imagens = [
    'Slide1.PNG',
    'Slide2.PNG',
    'Slide3.PNG',
    'Slide4.PNG',
    'Slide5.PNG',
    'Slide6.PNG',
    'Slide7.PNG',
    'Slide8.PNG',
    'Slide9.PNG',
    'Slide10.PNG',
    'Slide11.PNG',
    'Slide12.PNG'
];

const beta = [
    'Slide1.PNG',
    'Slide2.PNG',
    'Slide3.PNG',
    'Slide4.PNG',
    'Slide5.PNG',
    'Slide6.PNG',
    'Slide7.PNG',
    'Slide8.PNG',
    'Slide9.PNG',
    'Slide10.PNG',
    'Slide11.PNG',
    'Slide12.PNG'
];

/*   ---   Algoritmo de Fisher-Yates para embaralhamento de arrays   ---   */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(imagens);
shuffle(beta);

let codigoHTML = '';

imagens.forEach(img => {
    codigoHTML += `
        <div class="memory-card">
            <img class = "frente-carta" src="images/cards Eeveelution/${img}">
            <img class= "fundo-carta" src="images/cards Eeveelution/verso.PNG">
        </div>
        `;
});

let betaHTML = '';

beta.forEach(imgB => {
    betaHTML += `
        <div class="memory-card">
            <img class = "frente-carta" src="images/betacards Eeveelution/${imgB}">
            <img class= "fundo-carta" src="images/betacards Eeveelution/verso.PNG">
        </div>
        `;
});


tabuleiro.innerHTML = codigoHTML + betaHTML;

const cartas = document.querySelectorAll(".memory-card");

let firstCard, secondCard;
let lockCards = false;

function flipCard() {
    console.log(this);
    if (lockCards) return false;
    this.classList.add("virar");

    if (!firstCard) {
        firstCard = this;
        return false;
    }

    secondCard = this;

    checkForMatch();
}


function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.betacard || firstCard.dataset.card === secondCard.dataset.card;

    !isMatch ? unFlipCards() : resetCards(isMatch);
}

function unFlipCards() {
    lockCards = true;
    setTimeout(() => {
        firstCard.classList.remove("virar");
        secondCard.classList.remove("virar");

        resetCards();
    }, 1000);
}

function resetCards(isMatch = false) {
    if (isMatch) {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    }

    [firstCard, secondCard, lockCards] = [null, null, false];
}

function virar() {
    this.classList.add("virar");

}

cartas.forEach(c => c.addEventListener('click', flipCard));
