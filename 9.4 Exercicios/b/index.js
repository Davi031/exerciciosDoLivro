function colorirNome() {
    const inNome = document.getElementById('inNome');

    let nome = inNome.value;

    localStorage.setItem('nome', nome);

    let partesDoNomeSeperadas = nome.split(' ');

    
   for (var i = 0; i < partesDoNomeSeperadas.length; i++){
    let h3 = document.createElement("h3");
    h3.style.color = gerarCorAleatoria();
    h3.textContent = partesDoNomeSeperadas[i];
    document.body.appendChild(h3);
   }

   removerCabecalhosAntigos()
   console.log(partesDoNomeSeperadas);
}

const btnExibirNome = document.getElementById('btnExibirNome');
btnExibirNome.addEventListener("click", colorirNome);

function gerarCorAleatoria() {
    let cor = '#';
    cor += Math.floor(Math.random() * 16777215).toString(16);
    return cor;
}

function removerCabecalhosAntigos(){
    const cabecalhos = document.querySelectorAll('.nome');
    for (var i= 0; i < cabecalhos.length; i++) {
        cabecalhos[i].remove();
    }
}