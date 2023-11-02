// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp


let cadena = prompt("Introduce una cadena de texto:");
let num = cadena.length;
let caracter;
let i;
for (i = 0; i < num; i++) {
    caracter = cadena.charAt(i);
    if (i == num - 1) {
        document.write(caracter);
    }
    else {
        document.write(caracter + "-");
    }
}