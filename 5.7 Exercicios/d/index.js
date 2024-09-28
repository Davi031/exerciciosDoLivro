var todasAsNoticias = [];

const outValor = document.getElementById('outValor');

function adicioanrNoticias() {
  const inNoticia = document.getElementById('inNoticia');

  let noticia = (inNoticia.value);

  if (noticia === ''){
    return alert('insira um valor válido');
  }

  todasAsNoticias.push(noticia);

  numeroDeNoticias()

  console.log(todasAsNoticias)
}

const btnAdicioanr = document.getElementById('btnAdicioanr');
btnAdicioanr.addEventListener('click', adicioanrNoticias);

function numeroDeNoticias() {
  outValor.innerHTML = `Número de Cadastros: ${todasAsNoticias.length}`;
}

function ultimasNoticias() {
  

  let noticiasRecentes = '';

  for ( var i = todasAsNoticias.length -1; i >= 0; i--){
    noticiasRecentes += `${i + 1}) ${todasAsNoticias[i]}<br>`;
  }
  outValor.innerHTML = `${inNoticia.value} Últimas Notícias <br> ----------------------------------- <br> ${noticiasRecentes}`;
}


const btnListarUltimasNoticias = document.getElementById('btnListarUltimasNoticias');
btnListarUltimasNoticias.addEventListener('click', ultimasNoticias);