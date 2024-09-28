function lanHouse(){
    let inProduto = document.getElementById('inProduto')
    let inPreco = document.getElementById('inPreco')
    let ourValor = document.getElementById('ourValor')

    let produto = (inProduto.value)
    let preco = Number(inPreco.value)

    let itemComDesconto = preco * 0.50
    let resultado = ((preco * 2) + itemComDesconto);

    ourValor.textContent = `${produto} - Promoção: Leve 3 por R$: ${resultado}.
    O 3* Produto custa apenas R$: ${itemComDesconto}` 

}
let btnMostrarPromocao = document.getElementById('btnMostrarPromocao');
btnMostrarPromocao.addEventListener("click", lanHouse);
