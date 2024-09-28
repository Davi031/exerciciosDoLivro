function RepetirEstrelas(){
    const inNumero = document.getElementById('inNumero')

    const outValor = document.getElementById('outValor')

    let numero = Number(inNumero.value)
  

    if((inNumero.value === '' ) || (isNaN(numero))) {
     alert('Digite uma valor Válido')
     inNumeroDeChinchilas.value = '';
     inNumero.value = '';
     return;

    }

    let receberEstrelas = ''

    for (let i = 1; i <= numero; i++) {
     for (let j = 1; j <= i; j++) {
      receberEstrelas += '*';
     }
     receberEstrelas += '<br>';
    }

     outValor.innerHTML = receberEstrelas ;
}

/*In this updated code, the for loop that generates the output has been modified to include a nested for loop that prints the '*' characters and spaces. The inner loop iterates from 1 to i, where i is the current iteration of the outer loop. During each iteration of the inner loop, a '*' character is added to the receberEstrelas string. After the inner loop completes, a space character ' ' is added to the string, followed by a '\n' character to create a line break.

Finally, the resulting string is set as the textContent of the outValor element, which will display the output vertically with each row on a new line.


Ou método repeat;
*/

let btnResultado = document.getElementById('btnResultado');
btnResultado.addEventListener("click", RepetirEstrelas);
