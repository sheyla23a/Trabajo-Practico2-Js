// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)
// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let numeroIngresado = prompt("Por favor, ingresa un número (no mayor a 50):");

if (!isNaN(numeroIngresado)) {
    numeroIngresado = parseInt(numeroIngresado);
    if (numeroIngresado >= 0 && numeroIngresado <= 50) {
        for (let i = 1; i <= numeroIngresado; i++) {
            let linea = '';
            for (let j = 1; j <= i; j++) {
                linea += j + ' ';
            }
            document.write(linea + '<br>');
        }
    } else {
        alert("El número ingresado debe ser un entero positivo menor o igual a 50.");
    }
} else {
    alert("Por favor, ingresa un número válido.");
}

