let inputCards = parseInt(prompt('Com quantas cartas você quer jogar?'));
let row = document.querySelector('.rowCards');
let moves = 0;
let tryCounter = 0;

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
  inputCards = parseInt(
    prompt('Com quantas cartas você quer jogar?(Números pares, de 4 a 14)')
  );
}

function selectCard(selector) {
  if (selector.classList.contains('selected')) return;

  if (tryCounter === 0) {
    try1 = selector;
    try1.classList.add('selected');
    tryCounter++;
    moves++;
  } else if (tryCounter === 1) {
    try2 = selector;
    try2.classList.add('selected');
    tryCounter++;
    moves++;
    setTimeout(verifyCards, 1000);
  }
}

function verifyCards() {
  if (document.querySelectorAll('.selected').length === inputCards) {
    alert(`Você ganhou em ${moves} jogadas!`);
  } else if (
    try1.querySelector('.up-face img').src !==
    try2.querySelector('.up-face img').src
  ) {
    try1.classList.remove('selected');
    try2.classList.remove('selected');
    tryCounter = 0;
  } else {
    tryCounter = 0;
  }
}
