function lanHouse(){
    let inValor = document.getElementById('inValor')
    let inTempo = document.getElementById('inTempo')
    let ourValor = document.getElementById('ourValor')

    let valor = Number(inValor.value)
    let tempo = Number(inTempo.value)

    let tempoTotalDeUso = Math.ceil(tempo / 15);
    let resultado = (valor * tempoTotalDeUso)

    ourValor.textContent = `Valor a Pagar: ${resultado}`
}

let btnMostrarPromocao = document.getElementById('btnMostrarPromocao');
btnMostrarPromocao.addEventListener("click", lanHouse);
