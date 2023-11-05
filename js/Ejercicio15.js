// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Por favor, ingresa una cadena de texto:");
let contadorVocales = 0;

for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i].toLowerCase();
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u' ||
        caracter === 'á' || caracter === 'é' || caracter === 'í' || caracter === 'ó' || caracter === 'ú') {
        contadorVocales++;
    }
}

alert("El número de vocales en el texto es: " + contadorVocales);
