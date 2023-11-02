// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// Ejemplo:
// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido

const nota = parseFloat(prompt("Ingrese una nota (número de 0 a 10)"));

switch (true) {
  case nota >= 0 && nota <= 2:
    alert("Muy deficiente");
    break;
  case nota >= 3 && nota <= 4:
    alert("Insuficiente");
    break;
  case nota >= 5 && nota <= 6:
    alert("Suficiente");
    break;
  case nota === 7:
    alert("Bien");
    break;
  case nota >= 8 && nota <= 9:
    alert("Notable");
    break;
  case nota === 10:
    alert("Sobresaliente");
    break;
  default:
    if (isNaN(nota)) {
      alert("Introduce un número válido");
    } else {
      alert("Número erróneo. Por favor ingrese una nota entre 0 y 10.");
    }
    break;
}
