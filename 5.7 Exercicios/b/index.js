var numeros = [];

function adicionarNumero(){

    const inNumero = document.getElementById('inNumero')
    
    let numero = (inNumero.value)
  

    if(( inNumero.value === '' )) {
     alert('Digite uma valor Válido');
     inNumero.value = '';
     return;
    }

    numeros.push({numero: numero});
    console.log(numeros);

    outputdosNumeros();
}



let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener("click", adicionarNumero);

function outputdosNumeros(){
   
    if(numeros.length === 0){
        alert('Não há clubes na lista');
        return;
    }

    let lista = ''

    for (var i = 0; i < numeros.length; i++){
        lista += ` ${numeros[i].numero} \n`

        if(i !== numeros.length - 1){
            lista += ', '
        }
    
    }
 
    const outValor = document.getElementById('outValor');
    outValor.textContent = `Números: ${lista}`;
}

function vereficarOrdem() {
    const outValor = document.getElementById('outValor');

   let ordemCrescente = true;
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i+1]) {
      ordemCrescente = false;
      break;
    }
  }
  if (ordemCrescente) {
    outValor.textContent = "Atenção... Números estão em ordem crescente";
  } else {
    outValor.textContent = "Atenção... Números não estão em ordem crescente";
  }
}

let btnVereficarOrdem = document.getElementById('btnVereficarOrdem');
btnVereficarOrdem.addEventListener("click", vereficarOrdem);