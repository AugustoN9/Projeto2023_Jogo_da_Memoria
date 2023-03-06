const grid = document.querySelector('.grid');

const pokemons = ['Slide1', 'Slide2', 'Slide3', 'Slide4', 'Slide5', 'Slide6', 'Slide7', 'Slide8', 'Slide9', 'Slide10', 'Slide11', 'Slide12', 'Slide13', 'Slide14']

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disableCards = document.querySelectorAll('.disable-card');

    if (disableCards.length === 28) {
        alert('Parabéns, você conseguiu!');
    }

}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-pokemon');
    const secondCharacter = secondCard.getAttribute('data-pokemon');

    console.log(firstCharacter, secondCharacter);

    if (firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500);
    }


}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    }
    else if (secondCard == '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

}


const createCard = (pokemon) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/pokemons/pokemons/${pokemon}.PNG')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-pokemon', pokemon);

    return card;
}

const loadGame = () => {

    const duplicatePokemons = [...pokemons, ...pokemons];

    const shuffledArray = duplicatePokemons.sort(() => Math.random() - 0.5);

    duplicatePokemons.forEach((pokemon) => {
        const card = createCard(pokemon);
        grid.appendChild(card);
    });
}

loadGame();
