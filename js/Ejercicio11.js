// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *


const nombre1 = prompt("Ingresa un primer nombre:");
const edad1 = parseInt(prompt(" Ingresa su edad :"));
const nombre2 = prompt("Ingresa  un segundo nombre:");
const edad2 = parseInt(prompt("Ingresa su edad :"));
const nombre3 = prompt("Ingresa  un tercer nombre");
const edad3 = parseInt(prompt("Ingresa su edad :"));


const maximo = Math.max(edad1, edad2, edad3);

if (maximo === edad1) {
    document.write("El mayor es: " + nombre1);
}

if (maximo === edad2) {
    document.write("El mayor es: " + nombre2);
}

if (maximo === edad3) {
    document.write("El mayor es: " + nombre3);
}
