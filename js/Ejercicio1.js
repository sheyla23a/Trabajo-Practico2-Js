// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

const edad = parseInt(prompt('Ingrese su edad'));
if(edad >= 18 ){
 alert('Usted puede conducir');
} else if (isNaN(edad) || edad <= 0) {
    alert('Por favor, ingrese un número válido para la edad.');
}else{
    alert('No podes conducir');
}