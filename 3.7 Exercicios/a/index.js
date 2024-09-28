function parOuImpar(){
    const inNumero = document.getElementById('inNumero')

    const outPromocao = document.getElementById('outPromocao')

    let numero = Number(inNumero.value)

    if (numero % 2 === 0){
         outPromocao.textContent = `${numero} é par`
    } else {
         outPromocao.textContent = `${numero} é ímpar`
    }
}

let btnMostrarPromocao = document.getElementById('btnMostrarPromocao');
btnMostrarPromocao.addEventListener("click", parOuImpar);
