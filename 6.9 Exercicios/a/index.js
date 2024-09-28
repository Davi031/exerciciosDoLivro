const outValor = document.getElementById('outValor');
const inMensagem = document.getElementById('inMensagem');

function programaCriptografia() {
  const mensagem = inMensagem.value;
  let pares = '';
  let impares = '';

  for (let i = 0; i < mensagem.length; i++) {
    if (i % 2 === 0) {
      pares += mensagem[i];
    } else {
      impares += mensagem[i];
    }
  }
  return impares + pares;
}

const btnCriptografar = document.getElementById('btnCriptografar');
btnCriptografar.addEventListener('click', () => {
  const criptografado = programaCriptografia();
  outValor.innerHTML = criptografado;
});

const btnDescriptografar = document.getElementById('btnDescriptografar');
btnDescriptografar.addEventListener('click', () => {
  const descriptografado = programaCriptografia();
  outValor.innerHTML = descriptografado;
});