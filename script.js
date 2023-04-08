let inputCards = parseInt(prompt('Com quantas cartas você quer jogar?'));
let row = document.querySelector('.rowCards');

let gifs = [
  'bobrossparrot.gif',
  'explodyparrot.gif',
  'fiestaparrot.gif',
  'metalparrot.gif',
  'revertitparrot.gif',
  'tripletsparrot.gif',
  'unicornparrot.gif',
];

gifs.sort(comparador);

let gifsSort = gifs.slice(0, inputCards / 2);
gifsSort = gifsSort.concat(gifsSort);

gifsSort.sort(comparador);

for (let i = 0; i < inputCards; i++) {
  row.innerHTML =
    row.innerHTML +
    `
  <div class="card" data-test="card" onclick="selectCard(this)">
  
     <div class="down-face face">
      <img data-test="face-down-image" src="projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" />
     </div>

     <div class="up-face face">
      <img data-test="face-up-image" src="projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/${gifsSort[i]}" />
     </div>

  </div>
  `;
}

function comparador() {
  return Math.random() - 0.5;
}

while (
  inputCards === null ||
  inputCards < 4 ||
  inputCards > 14 ||
  inputCards % 2 !== 0
) {
  inputCards = parseInt(prompt('Com quantas cartas você quer jogar?'));
}

function selectCard(card) {
  const turnDown = card.querySelector('.down-face');
  const turnUp = card.querySelector('.up-face');

  turnDown.classList.add('selected-down-face');
  turnUp.classList.add('selected-up-face');
}
