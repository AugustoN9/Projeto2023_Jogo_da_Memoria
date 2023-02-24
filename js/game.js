const tabuleiro = document.getElementById('tabuleiro');

const imagens = [
    'figura1.png',
    'figura2.png',
    'figura3.png',
    'figura4.png',
    'figura5.png',
    'figura6.png',
    'figura7.png',
    'figura8.png',
    'figura9.png',
    'figura10.png',
    'figura11.png'
];

let codigoHTML = '';
imagens.forEach(img => {
    codigoHTML += `
        <div class="memory-card">
            <img class = "frente-carta" src="images/cards Eeveelution/${img}">
            <img class= "fundo-carta" src="images/cards Eeveelution/figura12.png">
        </div>
        `;
});

tabuleiro.innerHTML = codigoHTML + codigoHTML;