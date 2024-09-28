function ProgramaRepeteFruta(){
    const inNumero = document.getElementById('inNumero')
    const inFruta = document.getElementById('inFruta')
    
    const outValor = document.getElementById('outValor')

    let fruta = (inFruta.value)
    let numero = Number(inNumero.value)
  

    if((inFruta.value === '' || inNumero.value === '' ) || (isNaN(numero))) {
     alert('Digite uma valor Válido')
     inFruta.value = '';
     inNumero.value = '';
     return;

    }
    
    let separarFruta = "";
 
     for(var i = 2; i <= numero; i++){
      separarFruta += fruta + '*' ;
      ultimaFruta = `${fruta}`;
     }
     outValor.textContent = `${separarFruta}${ultimaFruta}`;
}


let btnResultado = document.getElementById('btnResultado');
btnResultado.addEventListener("click", ProgramaRepeteFruta);
