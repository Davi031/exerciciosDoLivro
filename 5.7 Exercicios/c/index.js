var candidatos = [];
var acertos = []

function adicionarCandidatos(){

    const inCandidato = document.getElementById('inCandidato');
    const inNacertos = document.getElementById('inNacertos');


    let numeroDeAcertos = Number((inNacertos.value))
    let candidato = (inCandidato.value)
  

    if(( inCandidato.value === '' || inNacertos.value === '')) {
     alert('Digite uma valor Válido');
     inCandidato.value = '';
     inNacertos.value = '';
     return;
    }

    candidatos.push({candidato: candidato});
    console.log(candidatos);
    console.log(acertos);
    acertos.push({numeroDeAcertos: numeroDeAcertos});

}

let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener("click", adicionarCandidatos);

function listarTodos(){

  const inCandidato = document.getElementById('inCandidato');
  const inNacertos = document.getElementById('inNacertos');
   
  if(( inCandidato.value === '' || inNacertos.value === '')) {
    alert('Digite uma valor Válido');
    inCandidato.value = '';
    inNacertos.value = '';
    return;
   }

    let listaDeCandidatos = ''

    for (var i = 0; i < candidatos.length; i++){
      listaDeCandidatos +=`${candidatos[i].candidato} - ${acertos[i].numeroDeAcertos} Acertos\n`
    } 

    const outValor = document.getElementById('outValor');
    outValor.textContent = `${listaDeCandidatos}`;
}

let btnListarTodos = document.getElementById('btnListarTodos');
btnListarTodos.addEventListener("click", listarTodos);


function cacularAprovados() {

  const outValor = document.getElementById('outValor');

  let mediaParaAprovados = prompt("Número de Acertos para Aprovação?");

  let candidatosAprovados = '';

  for (var i = 0; i < candidatos.length; i++) {
    if(acertos[i].numeroDeAcertos >= mediaParaAprovados) {
      candidatosAprovados += `${candidatos[i].candidato} - ${acertos[i].numeroDeAcertos} Acertos\n`;
    }
  }

  if (candidatosAprovados === '') {
    outValor.textContent = 'Nenhum candidato passou no exame.';
  } else {
    outValor.textContent = `Candidatos Aprovados:\n${candidatosAprovados}`;
  }

  outValor.textContent = `Candidatos aprovados: ${candidatosAprovados}`;

}


let btnVerificarAprovados = document.getElementById('btnVerificarAprovados');
btnVerificarAprovados.addEventListener("click", cacularAprovados);

