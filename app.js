document.addEventListener('DOMContentLoaded', () => {

    const numeroInput = document.getElementById('numeroInput');
    const convertirBtn = document.getElementById('convertirBtn');
    const resultadoP = document.getElementById('resultado');

    function convertirARomano(num) {
        const tablaRomana = [
            { valor: 1000, simbolo: 'M' }, { valor: 900, simbolo: 'CM' },
            { valor: 500, simbolo: 'D' },  { valor: 400, simbolo: 'CD' },
            { valor: 100, simbolo: 'C' },  { valor: 90, simbolo: 'XC' },
            { valor: 50, simbolo: 'L' },   { valor: 40, simbolo: 'XL' },
            { valor: 10, simbolo: 'X' },   { valor: 9, simbolo: 'IX' },
            { valor: 5, simbolo: 'V' },    { valor: 4, simbolo: 'IV' },
            { valor: 1, simbolo: 'I' }
        ];

        let resultado = '';

        for (const item of tablaRomana) {
            while (num >= item.valor) {
                resultado += item.simbolo;
                num -= item.valor;
            }
        }
        return resultado;
    }

    function manejarConversion() {
        const numero = parseInt(numeroInput.value);

        if (isNaN(numero) || numero <= 0 || numero > 3999) {
            resultadoP.textContent = 'Invictvs';
            resultadoP.style.color = '#ffcdd2';
        } else {
            resultadoP.textContent = convertirARomano(numero);
            resultadoP.style.color = '#FFFFFF';
        }
    }

    convertirBtn.addEventListener('click', manejarConversion);
    
    numeroInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            manejarConversion();
        }
    });

});