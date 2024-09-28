const inNome = document.getElementById('inNome');
const btnCitacao = document.getElementById('btnCitacao');
const outValor = document.getElementById('outValor');

function referenciaBibliografica(){
    const nome = inNome.value
    const partesNome = nome.split(' ');
    
    const sobrenome = partesNome[partesNome.length - 1];
    let iniciais = '';
    for(let i = 0; i < partesNome.length - 1; i++) {
        iniciais += partesNome[i][0].toUpperCase() + '.';
    }

    const citacao = sobrenome.toUpperCase() + ', ' + iniciais;
    outValor.textContent = citacao;
}

btnCitacao.addEventListener('click', referenciaBibliografica);