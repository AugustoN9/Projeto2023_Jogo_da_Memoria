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

let codigoHTML = '';
imagens.forEach(img => {
    codigoHTML += `
        <div class="memory-card">
            <img class = "frente-carta" src="images/cards Eeveelution/${img}">
            <img class= "fundo-carta" src="images/cards Eeveelution/sLIDE13.PNG">
        </div>
        `;
});

tabuleiro.innerHTML = codigoHTML + codigoHTML;