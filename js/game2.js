const tabuleiro = document.getElementById('tabuleiro');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const imagens = [];
let pokemon;
let codigoHTML = '';
const FrenteCarta = [];

function start() {

    for (var i = 0; i < 24; i++) {
        pokemon = {
            src: "images/cards Eeveelution/Slide" + i + ".PNG",
            id: i % 12
        };
        imagens.push(pokemon);
    }
    shuffle(imagens);
    console.log(imagens);

    imagens.forEach(pokemon => {
        codigoHTML += `
            <div class="memory-card">
                <img class = "frente-carta" src = "${pokemon.src}">
                <img class= "fundo-carta" src="images/cards Eeveelution/verso.PNG">
            </div>
            `;
    });

}

start();

console.log(imagens.find(pokemon => pokemon.id === 2));

tabuleiro.innerHTML = codigoHTML;

const cartas = document.querySelectorAll(".memory-card");

let firstCard, secondCard;
let IDfirstCard, IDsecondCard;
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

    //checkForMatch();
    compararId();
}

function compararId() {
    let isMatch = false;
    !isMatch ? unFlipCards() : resetCards(isMatch);
}

//function checkForMatch() {
//       !isMatch ? unFlipCards() : resetCards(isMatch);   
//}

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

cartas.forEach(c => c.addEventListener('click', flipCard));








