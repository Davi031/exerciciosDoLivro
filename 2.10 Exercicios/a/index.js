function procaoDemedicamento(){
    let inMedicamento = document.getElementById('inMedicamento')
    let inPreco = document.getElementById('inPreco')
    let outPromocao = document.getElementById('outPromocao')

    let medicamento = inMedicamento.value
    let preco = Number(inPreco.value)

    let resultado = Math.floor(preco * 2);

    outPromocao.textContent = `Promoção de ${medicamento}. Leve 2 por apenas R$:${resultado}`

}
let btnMostrarPromocao = document.getElementById('btnMostrarPromocao');
btnMostrarPromocao.addEventListener("click", procaoDemedicamento);
