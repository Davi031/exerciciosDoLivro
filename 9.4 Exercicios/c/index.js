let listaDeClubes = [];

function adicionarClube() {
    const inClube = document.getElementById('inClube');

    let clube = inClube.value;
    if (clube !== '') {
        listaDeClubes.push(clube);
        inClube.value = '';
        exibirClubes();
    }
}

function exibirClubes() {
    const divClubes = document.getElementById('divClubes');
    divClubes.innerHTML = '';

    for (let i = 0; i < listaDeClubes.length; i++) {
        const clube = listaDeClubes[i];
        const h5 = document.createElement('h5');
        h5.style.textAlign = 'right';
        h5.style.fontStyle = 'italic';
        h5.style.textTransform = 'uppercase';
        h5.textContent = clube;
        divClubes.appendChild(h5);
    }
}

const btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionarClube);

function montarTabelaDeJogos() {
    const divTabela = document.getElementById('outValor');
    divTabela.innerHTML = '';

    if (listaDeClubes.length % 2 !== 0) {
       alert('Número de clubes inválido');
       return;
    }
    
    let tabela = '';

    for (let i = 0; i < listaDeClubes.length; i += 2) {
        tabela += `${listaDeClubes[i]} X ${listaDeClubes[i + 1]}<br>`
    }

    divTabela.innerHTML = `Tabela de Jogos: <br> ${tabela}`

    // Desabilita os botões
    const btnAdicionar = document.getElementById('btnAdicionar');
    const btnMontarTabelaDeJogos = document.getElementById('btnMontarTabelaDeJogos');

    btnAdicionar.disabled = true;
    btnMontarTabelaDeJogos.disabled = true;
}

const btnMontarTabelaDeJogos = document.getElementById('btnMontarTabelaDeJogos');
btnMontarTabelaDeJogos.addEventListener('click', montarTabelaDeJogos);

function novosClubes() {
    listaDeClubes = [];
    exibirClubes();
}

const btnNovosClubes = document.getElementById('btnNovosClubes');
btnNovosClubes.addEventListener('click', novosClubes);
