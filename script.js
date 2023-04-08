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

let gifsSort = gifs.slice(0, inputCards);

gifsSort.sort(comparador);

for (let i = 0; i < inputCards; i++) {
  row.innerHTML =
    row.innerHTML +
    `
  <div class="card" data-test="card">
  
     <div class="front-face face">
      <img data-test="face-up-image" src="projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" />
     </div>

     <div class="back-face face">
      <img data-test="face-down-image" src="projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/${gifsSort[i]}" />
     </div>

  </div>
  `;
}

function comparador() {
  return Math.random() - 0.5;
}

while (inputCards === null || inputCards < 4 || inputCards > 14) {
  inputCards = parseInt(prompt('Com quantas cartas você quer jogar?'));
}
