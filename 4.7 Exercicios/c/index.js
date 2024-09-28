function verificaNumeroPerfeito(){
    const inNumero = document.getElementById('inNumero')

    const outValor = document.getElementById('outValor')

    let numero = Number(inNumero.value)
  

    if((inNumero.value === '' ) || (isNaN(numero))) {
     alert('Digite uma valor Válido')
     inNumero.value = '';
     return;

    }
    
   let somaDivisores = 0;
   let divisore = [];

   for (let i = 1; i < numero; i++) {
    if (numero % i === 0 ) {
      somaDivisores += i;
      divisore.push(i);
    }
   }

   if (somaDivisores === numero) {
    outValor.textContent = `Divisores do ${numero}: ${divisore.join(', ')} (Soma: ${numero})`;
  } else {
    outValor.textContent = `${numero} Não é um número perfeito`;
  }
   
}


let btnResultado = document.getElementById('btnResultado');
btnResultado.addEventListener("click", verificaNumeroPerfeito);
