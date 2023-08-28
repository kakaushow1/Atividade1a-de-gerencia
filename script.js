const adicionarBtn = document.getElementById('adicionarBtn');
const deletarBtn = document.getElementById('deletarBtn');
const bebidaInput = document.getElementById('bebidaInput');
const listaBebidas = document.getElementById('listaBebidas');

adicionarBtn.addEventListener('click', () => {
  const nomeBebida = bebidaInput.value;
  if (nomeBebida) {
    const li = document.createElement('li');
    li.textContent = nomeBebida;
    listaBebidas.appendChild(li);
    bebidaInput.value = '';
  }
});

deletarBtn.addEventListener('click', () => {
  const selectedLi = listaBebidas.querySelector('li:last-child');
  if (selectedLi) {
    listaBebidas.removeChild(selectedLi);
  }
});