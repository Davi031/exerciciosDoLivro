function MostrarAtleta() {
  const outValor = document.getElementById('outValor');
  const inAtleta = document.getElementById('inAtleta');
  const inIdade = document.getElementById('inIdade');

  let atleta = (inAtleta.value)
  let idade = (inIdade.value)

  if (inAtleta.value === '' || inIdade.value === '' ) {
    alert('Digite uma valor Válido');
    inAtleta.value = '';
    inIdade.value = '';
    return;

  }

  outValor.innerHTML = `${(tracado(atleta))}<br>Categoria: ${categorizarAluno(idade)}`
  console.log(`${(tracado(atleta))}<br>Categoria: ${categorizarAluno(idade)}`)

}

let btnCategorizarAtleta = document.getElementById('btnCategorizarAtleta');
btnCategorizarAtleta.addEventListener("click", MostrarAtleta);

function tracado(atleta) {
  let tracos = "";
  let espacos = "";
  for (let i = 0; i < atleta.length; i++) {
    if (atleta[i] === " ") {
      tracos += " ";
    } else {
      tracos += "-"
    }
  }
  for (let i = 0; i < atleta.length; i++){
    espacos += " ";
  }
  return atleta + "<br>" + tracos.slice(0, atleta.length) + "<br>" + espacos;
}

function categorizarAluno(idade) {
  if (idade <= 12){
    return "infantil"
  } else if (idade >= 13 && idade <= 18) {
    return "juvenil"
  } else {
    return "Adulto"
  }
}


