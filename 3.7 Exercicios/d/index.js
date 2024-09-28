function parquimetro(){
    const inLadoA = document.getElementById('inLadoA')
    const inLadoB = document.getElementById('inLadoB')
    const inLadoC = document.getElementById('inLadoC')
    const outValor = document.getElementById('outValor')

    let ladoA = Number(inLadoA.value)
    let ladoB = Number(inLadoB.value)
    let ladoC = Number(inLadoC.value)

    if((inLadoA.value === '' || inLadoB.value === '' || inLadoC.value === '') || (isNaN(ladoA) || (isNaN(ladoB) || (isNaN(ladoC))))) {
     alert('Digite uma valor Válido')
     inLadoA.value = '';
     inLadoB.value = '';
     inLadoC.value = '';
     return;

    }
    
    if ((ladoA === ladoB) && (ladoB === ladoC) && (ladoC === ladoA)){
     outValor.textContent = `Lados podem formar um triângulo. Tipo: Equilátero.`

    } else if ((ladoA === ladoB) || (ladoB === ladoC) || (ladoC === ladoA)){
     outValor.textContent = `Lados podem formar um triângulo. Tipo: Isósceles.`

    } else {
     outValor.textContent = `Lados podem formar um triângulo. Tipo: Escaleno.`
    }
}

let btnResultado = document.getElementById('btnResultado');
btnResultado.addEventListener("click", parquimetro);
