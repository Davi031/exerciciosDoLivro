function parquimetro(){
    const inValor = document.getElementById('inValor')
    const outValor = document.getElementById('outValor')

    let valor = Number(inValor.value)

    if((inValor.value === '' ) || (isNaN(valor))) {
     alert('Digite uma valor Válido')
     inValor.value = '';
     return;
    }
    const paraTrintaMinutos = 1.00
    const paraSessentaMinutos = 1.75
    const paraCentoEvinteOuMais = 3.00

    if (valor >= paraTrintaMinutos && valor <= paraSessentaMinutos){
     outValor.textContent = `Tempo: 30 minutos. Troco R$ ${valor - paraTrintaMinutos}`

    } else if (valor >= paraSessentaMinutos && valor <= paraCentoEvinteOuMais){
     outValor.textContent = `Tempo: 60 minutos. Troco R$ ${valor - paraSessentaMinutos}`

    } else if (valor >= paraCentoEvinteOuMais){
     outValor.textContent = `Tempo: 30 minutos. Troco R$ ${valor - paraCentoEvinteOuMais}`
    } else {
     outValor.textContent = `Valor Insuficiente.`
    }
}

let btnResultado = document.getElementById('btnResultado');
btnResultado.addEventListener("click", parquimetro);
