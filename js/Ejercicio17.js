// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
// Ejemplo:
// Input: Hola mundo
// Output: la vocal ‘o’ está en la posición 1


let texto = prompt("Por favor, ingresa una cadena de texto:");
let posicionPrimeraVocal = -1;
for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i].toLowerCase();
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u' ||
        caracter === 'á' || caracter === 'é' || caracter === 'í' || caracter === 'ó' || caracter === 'ú') {
        posicionPrimeraVocal = i + 1; 
        break; 
    }
}

if (posicionPrimeraVocal !== -1) {
    alert("La primera vocal se encuentra en la posición: " + posicionPrimeraVocal);
} else {
    alert("No se encontraron vocales en el texto.");
}
