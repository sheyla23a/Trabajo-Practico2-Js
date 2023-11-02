// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;

while (true) {
  let numeros = prompt("Introduce un número o pulsa 'cancelar' para salir");

  if (numeros === null) {
    break;
  }

  numeros = Number(numeros);

  if (!isNaN(numeros)) {
    suma += numeros;
  } else {
    alert(numeros + " no es un valor numérico válido");
  }
}

document.write("La suma de los números ingresados es: " + suma);
