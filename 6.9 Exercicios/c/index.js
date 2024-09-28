const inFrase = document.getElementById('inFrase');
const outValor = document.getElementById('outValor');

function palindromo() {
    const frase = inFrase.value;

    const fraseInvertida = frase.split('').reverse().join('');

    if(frase === fraseInvertida){
        outValor.textContent = `${frase} é um palíndromo.`
    } else {
        outValor.textContent = `${frase} Não é um palíndromo.`
    }
}

const btnVereficar = document.getElementById('btnVereficar');
btnVereficar.addEventListener('click', palindromo);
