var clubes = [];

function adicionarClube(){

    const inClube = document.getElementById('inClube')
    
    let clube = (inClube.value)
  

    if(( inClube.value === '' )) {
     alert('Digite uma valor Válido');
     inClube.value = '';
     return;
    }

    clubes.push({clube: clube});
    console.log(clubes);
}

let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener("click", adicionarClube);

function listarClubes(){
   
    if(clubes.length === 0){
        alert('Não há clubes na lista');
        return;
    }

    let lista = ''

    for (var i = 0; i < clubes.length; i++){
        lista += `${i+1} - ${clubes[i].clube}\n`
    }

    const outValor = document.getElementById('outValor');
    outValor.textContent = lista;
}

let btnListarClubes = document.getElementById('btnListarClubes');
btnListarClubes.addEventListener("click", listarClubes);


function tabelaDeJogos(){
    if (clubes.length === 0){
        alert('Não há clubes na lista');
        return;
    }


    let tabela = '';

    for (var i = 0; i < clubes.length; i++){
        for(var j = i + 1; j < clubes.length; j++){
            tabela += `${clubes[i].clube} X ${clubes[j].clube}\n`;
        }
    }

    const outValor = document.getElementById('outValor');
    outValor.textContent = tabela;
}

let btnMontarTabelaDeJogos = document.getElementById('btnMontarTabelaDeJogos');
btnMontarTabelaDeJogos.addEventListener("click", tabelaDeJogos);
