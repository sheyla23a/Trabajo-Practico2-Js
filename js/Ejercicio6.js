// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
// ejemplo;
// 1
// 22
// 333
// 4444
// 55555
// 666666

let contador;
let rep;

for (contador = 1; contador <= 30; contador++) {
  for (rep = 0; rep < contador; rep++) {
    document.write(contador);
  }
  document.write("<br>");
}
