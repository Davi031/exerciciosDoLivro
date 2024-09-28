let servicos = [];

function addSevicos(evento) {
    evento.preventDefault();
    const servicoInput = document.getElementById('inValor');
    const novoServico = servicoInput.value;

    servicos.push(novoServico);

    const servicosPendentes = document.getElementById('servicosPendente');
    servicosPendentes.textContent = servicos.length;

    servicoInput.value = '';
}

const btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', addSevicos);

function executarServico() {
    if (servicos.length > 0) {
        const servicosExecutados = servicos.shift();

        servicosPendentes.textContent = servicos.length;

        const listaDeServicosExecutados = document.getElementById('outValor');
        const listarItem = document.createElement('p');
        listarItem.textContent = servicosExecutados;
        listaDeServicosExecutados.appendChild(listarItem);
    } else {
        alert('Não há serviços pendentes')
    }
}

if (localStorage.getItem('services')){
    servicos = JSON.parse(localStorage.getItem('services'));

    const servicosPendentes = document.getElementById('servicosPendentes');
    servicosPendentes.innerHTML = servicos.length;

    const listaDeServicosExecutados = document.getElementById('outValor');
    servicos.forEach(servico => {
        const listarItem = document.createElement('p');
        listarItem.innerHTML = servico;
        listaDeServicosExecutados.appendChild(listarItem);
    });
}

const btnExecutarServico = document.getElementById('btnExecutarServico');
btnExecutarServico.addEventListener('click', executarServico);

window.addEventListener('beforeunload', saveServices);

function saveServices() {
    localStorage.setItem('services', JSON.stringify(servicos));
}