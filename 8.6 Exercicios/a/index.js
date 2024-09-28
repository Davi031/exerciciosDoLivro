function getVisitas() {
    let visitas = localStorage.getItem('visitas');
    if(visitas === null) {
        // se o valor não existe no localStorage, define o valor como 1 
        localStorage.setItem('visitas', '1');
        visitas = 1;
    } else {
        // Se o valor existe no  loalStorage, converte para número e o incrementa
        visitas = parseInt(visitas) + 1;
        localStorage.setItem('visitas', visitas.toString());
    }
    return visitas;
}

visitas = getVisitas();
const mensagem = document.getElementById('mensagem');
if (visitas === 1) {
    mensagem.innerText = 'Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.'
} else {
    mensagem.innerText = 'Que bom que você voltou! Esta é a sua visita de número ' + visitas + ' ao nosso site.';
}