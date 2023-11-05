// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

// Solicitar al usuario que ingrese una cadena de texto
let texto = prompt("Por favor, ingresa una cadena de texto:");
let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

alert("El texto invertido es: " + textoInvertido);
