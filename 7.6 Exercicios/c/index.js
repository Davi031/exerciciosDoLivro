const simRadio = document.getElementById("sim");
const naoRadio = document.getElementById("nao");
const select = document.getElementById("inSelecionarCovenio");

function calcularDesconto() {
  const outValor = document.getElementById('outValor');
  const inVacina = document.getElementById('inVacina');

  let vacina = Number(inVacina.value)
  const convenio = select.value;

  if (inVacina.value === '') {
    alert('Digite uma valor Válido');
    inVacina.value = '';
    return;
  }

  let desconto = 0;
  let precoDesconto = 0;

  if (naoRadio.checked) {
    desconto = 0.1;
    precoDesconto = vacina * desconto;
  }

  if (simRadio.checked) {

    if (convenio === "AmigoDosAnimais") {
      desconto = 0.2;
      precoDesconto = vacina * desconto;
    }

    if (convenio === "SaúdeAnimal") {
      desconto = 0.5;
      precoDesconto = vacina * desconto;
    }
  }

  const valorComDesconto = vacina * (1 - desconto);
  outValor.innerHTML = `Desconto: R$ ${precoDesconto.toFixed(2)}<br> A pagar R$: ${valorComDesconto.toFixed(2)}`;

}

let btnCalcularDesconto = document.getElementById('btnCalcularDesconto');
btnCalcularDesconto.addEventListener("click", calcularDesconto);

function trocarItem() {

  if (simRadio.checked) {
    select.style.display = "block"
  } else {
    select.style.display = "none"
  }
}

simRadio.addEventListener("change", trocarItem);
naoRadio.addEventListener("change", trocarItem);





