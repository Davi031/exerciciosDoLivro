function vereficadorDeVelocidade(){
    const inVelocidadePermetida = document.getElementById('inVelocidadePermetida');
    const inVelocidadeDoCondutor = document.getElementById('inVelocidadeDoCondutor');
    const outValor = document.getElementById('outValor');

    let velocidadePermetida = Number(inVelocidadePermetida.value);
    let velocidadeDoCondutor = Number(inVelocidadeDoCondutor.value);

    if((inVelocidadeDoCondutor.value === '' || inVelocidadePermetida.value === '') || (isNaN(velocidadePermetida) || isNaN(velocidadeDoCondutor))) {
     alert('Digite uma velocidade Válida')
     inVelocidadeDoCondutor.value = '';
     inVelocidadePermetida.value = '';
     return;
    }

    let velocidadeAcima = velocidadeDoCondutor - velocidadePermetida;
    let velocidadeEntreVinte = (velocidadePermetida * 0.2);

    if (velocidadeDoCondutor <= velocidadePermetida){
     outValor.textContent = `Situação: Sem Multa`;

    } else if (velocidadeAcima >= velocidadeEntreVinte){
     outValor.textContent = `Situação: Multa Grave`;

    } else {
     outValor.textContent = `Situação: Multa Leve`;
    }
}

let btnResultado = document.getElementById('btnResultado');
btnResultado.addEventListener("click", vereficadorDeVelocidade);
