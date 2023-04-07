let input_cards = parseInt(prompt('Com quantas cartas você quer jogar?'));
let row = document.querySelector('.rowCards');

for (let i = 0; i < input_cards; i++) {
  row.innerHTML =
    row.innerHTML +
    `
  <div class="card">
    <img src="projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" />
  </div>`;
  console.log(input_cards);
}
