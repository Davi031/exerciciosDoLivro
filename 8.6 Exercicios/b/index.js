var listaDeProdutos = [];

if (localStorage.getItem('listaDeProdutos')){
  listaDeProdutos = JSON.parse(localStorage.getItem('listaDeProdutos'));
  atualizarLista();
}

function adicionarItem() {
  const inProduto = document.getElementById('inProduto');

  let produto = (inProduto.value);

  if (inProduto.value === '') {
    alert('Digite uma valor Válido');
    inProduto.value = '';
    return;
  }

  listaDeProdutos.push({produto: produto});

  listaDeProdutos.sort(function(a, b){
    return a.produto.localeCompare(b.produto);
  });

localStorage.setItem('listaDeProdutos', JSON.stringify(listaDeProdutos));

atualizarLista();

}


let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener("click", adicionarItem);


function removerItens() {
  localStorage.clear('listaDeProdutos')
  listaDeProdutos = []
  atualizarLista();
}


let btnLimparLista = document.getElementById('btnLimparLista');
btnLimparLista.addEventListener("click", removerItens);


function atualizarLista() {
  const outValor = document.getElementById('outValor');

  let armazenarItem = '';

  for (var i = 0; i < listaDeProdutos.length; i++) {
    armazenarItem += `${listaDeProdutos[i].produto}<br>`;

  }

  outValor.innerHTML = `Produtos Adicionados<br> ------------------------- <br>${armazenarItem}`;
  
  }





