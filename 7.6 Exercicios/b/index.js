function senhaInicial() {
  const outValor = document.getElementById('outValor');
  const inNome = document.getElementById('inNome');

  let nome = (inNome.value.trim())

  if (inNome.value === '') {
    alert('Digite uma valor Válido');
    inNome.value = '';
    return;
  }

  outValor.innerHTML = `${(validarNome(nome)) ? obterSobrenome(nome) + contarVogais(nome) : 'Nome incompleto'}`;
  console.log(`${(validarNome(nome)) ? obterSobrenome(nome) + contarVogais(nome) : 'Nome incompleto'}`);

}

let btnGeraSenha = document.getElementById('btnGeraSenha');
btnGeraSenha.addEventListener("click", senhaInicial);

function validarNome(nome){
  const partesNome = nome.split(" ");

  if(partesNome.length < 2) {
    return false;
  }

  for(let i = 0; i < partesNome.length; i++){
    if(partesNome[i].length === 0) {
      return false;
    }
  }
  return true;
}

function obterSobrenome(nome) {

  let partesNome = nome.split(" ");
  let sobrenome = partesNome.pop();
  return sobrenome.toLowerCase();

}

function contarVogais(nome) {
  const vowels = ["a", "e", "i", "o", "u"]
  let count = 0;

  for (let i = 0; i < nome.length; i++){
    if(vowels.includes(nome[i].toLowerCase())){
      count++
    }
  }
  return "0" + count;
}

