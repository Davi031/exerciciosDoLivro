function ProgramaRepeteFruta(){
    const inNumeroDeChinchilas = document.getElementById('inNumeroDeChinchilas')
    const inAnos = document.getElementById('inAnos')
    
    const outValor = document.getElementById('outValor')

    let numeroDeChinchilas = Number(inNumeroDeChinchilas.value)
    let ano = Number(inAnos.value)
  

    if((inNumeroDeChinchilas.value === '' || inAnos.value === '' ) || (isNaN(ano) || (isNaN(numeroDeChinchilas)))) {
     alert('Digite uma valor Válido')
     inNumeroDeChinchilas.value = '';
     inAnos.value = '';
     return;

    }
    
    let retornarPrevisao = "";
    let totalDechinchilasAoFinal = numeroDeChinchilas 
 
     for(var i = 1; i <= ano; i++){
       retornarPrevisao += `${i}º Ano ${totalDechinchilasAoFinal} Chinchilas.\n`
       totalDechinchilasAoFinal *=3;
     }

     outValor.textContent = `${retornarPrevisao}`;
}


let btnResultado = document.getElementById('btnResultado');
btnResultado.addEventListener("click", ProgramaRepeteFruta);
