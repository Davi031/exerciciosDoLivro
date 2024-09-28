const  inIdade = document.getElementById('inIdade');

function exibirVelas() {
    let idade = Number(inIdade.value);

    if (idade >= 1 && idade <= 120){
        inserirVelas(idade);
    } else {
        alert('idade Inválida');
    }
}

const btnExibirVelas = document.getElementById('btnExibirVelas');
btnExibirVelas.addEventListener('click', exibirVelas)

function criarVelas() {
    const divVelas = document.getElementById('DivVelas');
    divVelas.innerHTML = '';
    for (let i = 0; i < 10; i++){
        let img = new Image();
        img.src = 'img/' + i + '.png';
        img.alt = i;
        img.width = 50;
        divVelas.appendChild(img);
    }
}

function inserirVelas(idade){
    const divIdade = document.getElementById('divIdades');
    divIdade.innerHTML = '';
    let idadeStr = idade.toString();
    for (var i = 0; i < idadeStr.length; i++){
        let img = new Image();
        img.src = 'img/' + idadeStr[i] + '.png';
        img.alt = idadeStr[i];
        img.width = 50;
        divIdade.appendChild(img);
    }
}

function novasVelas(){
    const divIdades = document.getElementById('divIdades')
    divIdades.innerHTML = '';
}

const btnNovasVelas = document.getElementById('btnNovasVelas');
btnNovasVelas.addEventListener('click', novasVelas);

window.onload = criarVelas;

