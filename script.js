let input_cards = parseInt(prompt('Com quantas cartas você quer jogar?'));
let row = document.querySelector('.rowCards');

for (let i = 0; i < input_cards; i++) {
  row.innerHTML =
    row.innerHTML +
    `
  <div class="card" data-test="card">
  
     <div class="front-face face">
      <img data-test="face-up-image" src="projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" />
     </div>

     <div class="back-face face">
      <img data-test="face-down-image" src="projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/bobrossparrot.gif" />
     </div>

  </div>
  `;
}
